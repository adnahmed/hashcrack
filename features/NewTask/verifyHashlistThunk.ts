import { isErrorWithMessage } from '@/lib/error';
import { AppState } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { HashType } from '@/nth/HashTypeObj';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { WPACaptureFileTypes } from '../HashInput/HashTypes/Wireless/EAPOL';
import { failedParsingHash, hashlistVerificationChanged, parsedHash } from './newTaskSlice';
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
                        } else if (size == 392) {
                            const essid = text.substring(0, 33).replace('\x00', '');
                            const bssid = macEncode(text.substring(36, 7));
                            const stmac = macEncode(text.substring(42, 7));
                            const mic = hexEncode(text.substring(text.length - 15));
                        }
                        // const data = new Hccapx(new KataiStream());
                        thunkAPI.fulfillWithValue(true); // TODO: change true to data
                    };
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
    // parse and update count of parsed hashes

    // also update the amount of read lines
    // after completion,
    // if errors then report them to the user with a modal.
    // else update allowVerificationPage state to true
});
