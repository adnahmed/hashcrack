import { WPACaptureFileTypes } from '@/assets/constants';
import { isErrorWithMessage } from '@/lib/error';
import { AppState } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { HashType } from '@/nth/HashTypeObj';
import { createAsyncThunk } from '@reduxjs/toolkit';
import KataiStream from 'kaitai-struct/KaitaiStream';
import toast from 'react-hot-toast';
import Hccapx from './Hccapx';
import { failedParsingHash, hashlistVerificationChanged, parsedHash, setWpaInfo } from './newTaskSlice';
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
                if (selectedHashType === '2500' && !WPACaptureFileTypes.includes(`.${type}`)) return thunkAPI.rejectWithValue(`Invalid File, expected ${WPACaptureFileTypes.join(', ')}, got ${type}`);
                if (WPACaptureFileTypes.includes(`.${type}`)) {
                    const essid = [], bssid = [], stmac = [], mic = [];
                    if (text.substring(0, 4) == 'HCPX' && size % 393 == 0) {
                        for (let i = 0; i < size / 393; i++) {
                            const pos = i * 393;
                            essid.push(text.substring(pos + 10, 35).replace('\x00', ''));
                            bssid.push(macEncode(text.substring(pos + 59, 7)));
                            stmac.push(macEncode(text.substring(pos + 97, 7)));
                            mic.push(hexEncode(text.substring(pos + 43, 17)));
                        }
                    } else if (size == 392) {
                        essid.push(text.substring(0, 33).replace('\x00', ''));
                        bssid.push(macEncode(text.substring(36, 7)));
                        stmac.push(macEncode(text.substring(42, 7)));
                        mic.push(hexEncode(text.substring(text.length - 15)));
                    }
                    const parsed = new Hccapx(new KataiStream(buffer));
                    if (parsed.records) {
                        const hccapxRecords = parsed.records as HccapxRecord[];
                        const wpaInfo = hccapxRecords.map(record => ({
                            essid: Buffer.from(record.essid).toString().replace('\x00', ''),
                            bssid: Buffer.from(record.macAp).toString('hex'),
                            stmac: Buffer.from(record.macStation).toString('hex'),
                            mic: Buffer.from(record.keymic).toString('hex'),
                            authenticated: [1, 2, 3, 4, 5].includes(record.messagePair),
                        }));
                        dispatch(setWpaInfo(wpaInfo));
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
