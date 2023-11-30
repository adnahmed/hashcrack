import { isErrorWithMessage } from '@/lib/error';
import { AppState } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { main, outputs } from '@/multicapconverter/multicapconverter';
import { HashType } from '@/nth/HashTypeObj';
import File from '@/utils/File';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as KaitaiStream, default as KataiStream } from 'kaitai-struct/KaitaiStream';
import toast from 'react-hot-toast';
import { ErrorWithMessage, isErrorWithMessage } from '../../lib/error';
import { FetchError, isFetchError, isTypeError } from '../api/apiSlice';
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
    constructor(message: string) {
        super(message);
        this.name = 'InvalidHashlistFileError';
    }
}
class EmptyHashlistFileError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmptyHashlistFileError';
    }
}
export const verifyHashlist = createAsyncThunk<undefined, VerifyHashlistArgs>('newTask/verifyHashlist', async ({ inputMethod, hashlist }, { dispatch, ...thunkAPI }) => {
    const {
        newTask: { selectedHashType, hashlistFile, hashlistFileType: type, hashlistFileSize: size },
    } = thunkAPI.getState() as AppState;
    const validateHash = (hash: string) => {
        try {
            const hi = HashType(hash).prototypes;
            const isValid = hi.split(',').includes(selectedHashType);
            isValid ? dispatch(parsedHash(hash)) : dispatch(failedParsingHash(hash));
        } catch (err) {
            if (isErrorWithMessage(err)) {
                thunkAPI.rejectWithValue(err.message);
            } else thunkAPI.rejectWithValue(err);
            dispatch(failedParsingHash(hash));
        }
    };
    try {
        switch (inputMethod) {
            case 'textarea':
                if (!hashlist || selectedHashType === '-1') return thunkAPI.rejectWithValue('Unable to parse hashlist or hashlist is too long, Please try again.');
                hashlist.forEach(validateHash);
                dispatch(hashlistVerificationChanged(true));
            case 'file':
                if (!hashlistFile || !size) return;
                const resp = await fetch(hashlistFile);
                const hf = resp.body;
                if (!hf) throw new InvalidHashlistFileError('Invalid hashlist file');
                const rb = await hf.getReader().read();
                const uintarray = rb.value;
                const buffer = uintarray?.buffer;
                if (!buffer) throw new EmptyHashlistFileError();
                const text = Array.from(uintarray).map(c => String.fromCodePoint(c)).join('');
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
                    return result;
                };
                const hexEncode = function (value: string) {
                    let hex, i;
                    let result = '';
                    for (i = 0; i < value.length; i++) {
                        hex = value.charCodeAt(i).toString(16).toUpperCase();
                        result += ('0000' + hex).slice(-2);
                    }
                    return result;
                };
                if (selectedHashType === '2500' && !WPACaptureFileTypes.includes(`.${type}`)) return thunkAPI.rejectWithValue(`Invalid File, expected ${WPACaptureFileTypes.join(', ')}, got ${type}`);
                if (WPACaptureFileTypes.includes(`.${type}`)) {
                    const reader = new FileReader();
                    reader.onload = async function () {
                        if (text.substring(0, 5) == 'HCPX' && size % 393 == 0) {
                            const out = '';
                            for (let i = 0; i < size / 393; i++) {
                                const pos = i * 393;
                                const essid = text.substring(pos + 10, 33).replace('\x00', '');
                                const bssid = macEncode(text.substring(pos + 59, 7));
                                const stmac = macEncode(text.substring(pos + 97, 7));
                                const mic = hexEncode(text.substring(pos + 43, 17));
                            }
                            break;
                        case 'cap':
                        case 'pcap':
                        case 'pcapng':
                            main({ export: 'hccapx', input: `.${type}` }, new File(uintarray), size);
                            console.log(outputs)
                            // const parsed = new Pcap(new KaitaiStream(buffer));
                            // const parsedCapFile = new CapFile(text, true);
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
                }
        }
    } catch (err) {
        if (isTypeError(err)) {
            if (process.env.NODE_ENV === 'development') {
                toast.error(err.message)
                console.error(err.message)
            }
            // TODO: message telemetry.
            thunkAPI.rejectWithValue(`Something didn't work as expected`);
        }
        if (isFetchError(err))
            thunkAPI.rejectWithValue(err.data.message || 'Something went wrong.');
        if (isErrorWithMessage(err))
            thunkAPI.rejectWithValue(err.message);
        if (typeof err === 'string')
            thunkAPI.rejectWithValue(err);
        throw err;
    }
});
