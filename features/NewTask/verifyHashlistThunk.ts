import { WPACaptureFileTypes } from '@/assets/constants';
import { isErrorWithMessage } from '@/lib/error';
import { AppState } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { HashType } from '@/nth/HashTypeObj';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as KaitaiStream, default as KataiStream } from 'kaitai-struct/KaitaiStream';
import toast from 'react-hot-toast';
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

interface HccapRecord {
    essid: Uint8Array;
    macAp: Uint8Array;
    macStation: Uint8Array;
    nonceStation: Uint8Array;
    nonceAp: Uint8Array;
    eapolBuffer: KaitaiStream<ArrayBuffer>;
    lenEapol: number;
    keyver: number;
    keymic: Uint8Array;
    _raw_eapolBuffer: Uint8Array;
}
interface HccapxRecord {
    magic: Uint8Array;
    version: number;
    ignoreReplayCounter: boolean;
    messagePair: number;
    lenEssid: number;
    essid: Uint8Array;
    padding1: Uint8Array;
    keyver: number;
    keymic: Uint8Array;
    macAp: Uint8Array;
    nonceAp: Uint8Array;
    macStation: Uint8Array;
    nonceStation: Uint8Array;
    lenEapol: number;
    eapol: Uint8Array;
    padding2: Uint8Array;
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
            case 'file':
                if (!hashlistFile || !size) return;
                const resp = await fetch(hashlistFile);
                const hf = resp.body;
                if (!hf) throw new InvalidHashlistFileError('Invalid hashlist file');
                const rb = await hf.getReader().read();
                const uintarray = rb.value;
                const buffer = uintarray?.buffer;
                if (!buffer) throw new EmptyHashlistFileError('Empty file submitted.');
                const text = Buffer.from(buffer).toString();
                const macEncode = function (value: string) {
                    let hex, i;
                    let result = '';
                    for (i = 0; i < value.length; i++) {
                        hex = value.charCodeAt(i).toString(16).toUpperCase();
                        result += ('0000' + hex).slice(-2);
                        if (i < value.length - 1) result += ':';
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
                    if (records) {
                        const wpaInfo = records.map(toWPAInfo);
                        const handshakes = wpaInfo.reduce(toHandshake, []);
                        dispatch(setHandshakes(handshakes));
                    }
                    thunkAPI.fulfillWithValue(true);
                } else {
                    // We found another file type say text.
                    const hashes = getHashlist(text);
                    hashes.forEach(validateHash);
                    dispatch(hashlistVerificationChanged(true));
                }
        }
    } catch (err) {
        toast.error(`Error Occurred: ${err}`);
    }
});

