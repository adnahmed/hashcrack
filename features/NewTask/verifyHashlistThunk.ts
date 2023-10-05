import { WPACaptureFileTypes } from '@/assets/constants';
import { AppDispatch, AppState } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { HashType } from '@/nth/HashTypeObj';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as KaitaiStream, default as KataiStream } from 'kaitai-struct/KaitaiStream';
import { ErrorWithMessage, isErrorWithMessage } from '../../lib/error';
import { FetchError, isFetchError } from '../api/apiSlice';
import CapFile from './FormatGallery/CapFile';
import type { HccapRecord, HccapxRecord } from './FormatGallery/HashcatTypes';
import Hccap from './FormatGallery/Hccap';
import Hccapx from './FormatGallery/Hccapx';
import { AccessPoint, failedParsingHash, hashlistVerificationChanged, parsedHash, setHandshakes } from './newTaskSlice';

interface WPAInfo {
    essid: string;
    bssid: string;
    stmac: string;
    mic: string;
    authenticated?: boolean;
    raw_data: Uint8Array;
}


interface VerifyHashlistArgs {
    inputMethod: 'textarea' | 'file';
    hashlist?: string[];
}
class InvalidHashlistFileError extends Error {
    constructor(message = 'Invalid hashlist file') {
        super(message);
        this.name = 'InvalidHashlistFileError';
    }
}
class EmptyHashlistFileError extends Error {
    constructor(message = 'Empty hashlist file') {
        super(message);
        this.name = 'EmptyHashlistFileError';
    }
}
export const verifyHashlist = createAsyncThunk<boolean | undefined, VerifyHashlistArgs, {
    dispatch: AppDispatch,
    state: AppState,
    rejectValue: FetchError | ErrorWithMessage | InvalidHashlistFileError | EmptyHashlistFileError | string
}>('newTask/verifyHashlist', async ({ inputMethod, hashlist }, { dispatch, ...thunkAPI }) => {
    const {
        newTask: { selectedHashType, hashlistFile, hashlistFileType: type, hashlistFileSize: size },
    } = thunkAPI.getState() as AppState;
    const validateHash = (hash: string) => {
        try {
            const hi = HashType(hash).prototypes;
            const isValid = hi.split(',').includes(selectedHashType);
            isValid ? dispatch(parsedHash(hash)) : dispatch(failedParsingHash(hash));
        } catch (err) {
            // TODO: add suggestion type for rejected hashes
            dispatch(failedParsingHash(hash));
        }
    };
    try {
        switch (inputMethod) {
            case 'textarea':
                if (!hashlist || selectedHashType === '-1') return thunkAPI.rejectWithValue('Unable to parse hashlist or hashlist is too long, Please try again.');
                hashlist.forEach(validateHash);
                dispatch(hashlistVerificationChanged(true));
                return thunkAPI.fulfillWithValue(true);
            case 'file':
                if (!hashlistFile || !size) return;
                const resp = await fetch(hashlistFile);
                const hf = resp.body;
                if (!hf) throw new InvalidHashlistFileError();
                const rb = await hf.getReader().read();
                const uintarray = rb.value;
                const buffer = uintarray?.buffer;
                if (!buffer) throw new EmptyHashlistFileError();
                const text = Buffer.from(buffer).toString();
                const toWPAInfo: (record: HccapxRecord | HccapRecord, index: number) => WPAInfo = (record, index) => ({
                    essid: Buffer.from(record.essid).toString().replace(/\x00|\u0000/gm, ''),
                    bssid: Buffer.from(record.macAp).toString('hex'),
                    stmac: Buffer.from(record.macStation).toString('hex'),
                    mic: Buffer.from(record.keymic).toString('hex'),
                    authenticated: ('messagePair' in record) ? [1, 2, 3, 4, 5].includes(record.messagePair) : undefined,
                    raw_data: new Uint8Array(buffer.slice(index * 393, (index * 393) + 392))
                })
                const toHandshake: (prev: AccessPoint[], curr: WPAInfo, index: number) => AccessPoint[] = (prev, curr, index) => {
                    if (prev.length === 0) {
                        return [{ ...curr, mic: [curr.mic], authenticatedHandshakes: curr.authenticated ? 1 : curr.authenticated === undefined ? curr.authenticated : 0 }];
                    }
                    if (!prev[0].mic.includes(curr.mic)) {
                        prev[0].mic.push(curr.mic);
                    }
                    if (curr.authenticated !== undefined)
                        if (index > 0 && curr.authenticated) {
                            if (!prev[0].authenticatedHandshakes) prev[0].authenticatedHandshakes = 1;
                            else prev[0].authenticatedHandshakes += 1;
                        }
                    return prev;
                }

                if (selectedHashType === '2500' && !WPACaptureFileTypes.includes(`.${type}`)) return thunkAPI.rejectWithValue(`Invalid File, expected ${WPACaptureFileTypes.join(', ')}, got ${type}`);
                if (WPACaptureFileTypes.includes(`.${type}`)) {
                    let records;
                    switch (type) {
                        case 'hccapx':
                        case 'hccap':
                            if (text.substring(0, 4) == 'HCPX' && size % 393 == 0) {
                                const parsed = new Hccapx(new KataiStream(buffer));
                                if (parsed.records) {
                                    records = parsed.records as HccapxRecord[];
                                }
                            } else if (size == 392) {
                                const parsed = new Hccap(new KaitaiStream(buffer));
                                if (parsed.records) {
                                    records = parsed.records as HccapRecord[];
                                }
                            }
                            break;
                        case 'cap':
                        case 'pcap':
                            const parsedCapFile = new CapFile(rb, undefined);
                            console.log(parsedCapFile);
                            break;
                    }
                    if (records) {
                        const wpaInfo = records.map(toWPAInfo);
                        const handshakes = wpaInfo.reduce(toHandshake, []);
                        dispatch(setHandshakes(handshakes));
                    }
                    return thunkAPI.fulfillWithValue(true);
                } else {
                    // We found another file type say text.
                    const hashes = getHashlist(text);
                    hashes.forEach(validateHash);
                    dispatch(hashlistVerificationChanged(true));
                    return thunkAPI.fulfillWithValue(true);
                }
        }
    } catch (err) {
        if (typeof err === 'string' || isFetchError(err) || isErrorWithMessage(err))
            return thunkAPI.rejectWithValue(err);
    }
});

