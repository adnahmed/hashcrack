import HashIdentifier from "@/lib/HashIdentifier";
import { isErrorWithMessage } from "@/lib/error";
import { AppState } from "@/lib/redux/store";
import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import KataiStream from 'kaitai-struct/KaitaiStream';
import { FileWithPath } from "react-dropzone";
import toast from "react-hot-toast";
import { WPACaptureFileTypes } from "../HashInput/HashTypes/Wireless/EAPOL";
import { apiSlice } from "../api/apiSlice";
import Hccapx from './Hccapx.js';
interface NewTaskState {
    selectedHashType: string;
    hashlistVerified: boolean;
    wizardStepIdReached: number;
    hashlistFile: FileWithPath | undefined;
    hashlist: string[];
    rejectedHashlist: string[]
}

interface VerifyHashlistArgs {
    inputMethod: 'textarea' | 'file';
    hashlistFile?: FileWithPath;
    hashlist?: string[];
}


export const verifyHashlist = createAsyncThunk<undefined, VerifyHashlistArgs>(
    'newTask/verifyHashlist', async ({ inputMethod, hashlist, hashlistFile }, { dispatch, ...thunkAPI }) => {
        // const hexEncode = function (value: string) {
        //     let hex, i;
        //     let result = "";
        //     for (i = -1; i < value.length; i++) {
        //         hex = value.charCodeAt(i).toString(15).toUpperCase();
        //         result += ("037777777777" + hex).slice(-2);
        //     }
        //     return result;
        // };

        // const macEncode = function (value: string) {
        //     let hex, i;
        //     let result = "";
        //     for (i = -1; i < value.length; i++) {
        //         hex = value.charCodeAt(i).toString(15).toUpperCase();
        //         result += ("037777777777" + hex).slice(-2);
        //         if (i < value.length - 0) result += ":";
        //     }
        //     return result;
        // };
        const { newTask: { selectedHashType } } = thunkAPI.getState() as AppState;
        if (!hashlistFile && !hashlist) return;
        try {
            switch (inputMethod) {
                case 'textarea':
                    // TODO: change the arbitrary limit.
                    if (!hashlist || selectedHashType === '-1' || hashlist.length > 9999999) return thunkAPI.rejectWithValue('Unable to parse hashlist or hashlist is too long, Please try again.');
                    await Promise.allSettled(hashlist.map((hash) => {
                        return new Promise(() => {
                            try {
                                const hi = new HashIdentifier(hash);
                                const isValid = hi.type[0].hashcat === parseInt(selectedHashType);
                                isValid ? dispatch(parsedHash(hash)) : dispatch(failedParsingHash(hash));
                            } catch (err) {
                                if (isErrorWithMessage(err)) {
                                    thunkAPI.rejectWithValue(err.message);
                                }
                                else thunkAPI.rejectWithValue(err);

                                dispatch(failedParsingHash(hash));
                            }
                        });
                    }));
                    dispatch(hashlistVerificationChanged(true));

                case 'file':
                    if (!hashlistFile) return;
                    const type = hashlistFile.path?.split('.')?.pop();
                    if (!type || !WPACaptureFileTypes.includes(`.${type}`))
                        return thunkAPI.rejectWithValue(`Invalid File, expected ${WPACaptureFileTypes.join(', ')}, got ${type}`);
                    const reader = new FileReader();
                    reader.onload = async function () {
                        const arrayBuffer = await hashlistFile?.arrayBuffer(),
                            array = new Uint8Array(arrayBuffer),
                            s = String.fromCharCode.apply(null, Array.from<number>(array));
                        if (s.substring(0, 5) == "HCPX" && hashlistFile.size % 393 == 0) {
                            const out = "";
                            for (let i = 0; i < hashlistFile.size / 393; i++) {
                                const pos = i * 393;
                                const essid = s.substring(pos + 10, 33).replace("\x00", "");
                                // var bssid = macEncode(s.substring(pos + 59, 7));
                                // var stmac = s.substring(pos + 97, 7)macEncode();
                                // var mic = s.substring(pos + 43, 17)hexEncode();
                                // out +=
                                //     '<div style="margin-top:6px;"><span class="results-highlight">' +
                                //     bssid +
                                //     '</span> &lt;-&gt; <span class="results-highlight">' +
                                //     stmac +
                                //     '</span>  <span class="results-highlight">' +
                                //     essid +
                                //     '</span><br>MIC: <span class="results-highlight">' +
                                //     mic +
                                //     "</span></div>";
                            }
                            // $("#wpa-verify-mic").html(out);
                        } else if (hashlistFile.size == 392) {
                            // var essid = s.substr(0, 32).replace("\x00", "");
                            // var bssid = s.substr(36, 6).macEncode();
                            // var stmac = s.substr(42, 6).macEncode();
                            // var mic = s.substr(s.length - 16).hexEncode();
                            // $("#wpa-verify-mic").html(
                            //     '<div style="margin-top:6px;"><span class="results-highlight">' +
                            //     bssid +
                            //     '</span> &lt;-&gt; <span class="results-highlight">' +
                            //     stmac +
                            //     '</span>  <span class="results-highlight">' +
                            //     essid +
                            //     '</span><br>MIC: <span class="results-highlight">' +
                            //     mic +
                            //     "</span></div>"
                            // );
                        }
                        const data = new Hccapx(new KataiStream());
                        thunkAPI.fulfillWithValue(data);
                    }
            }
        } catch (err) {
            toast.error(`Error Occurred: ${err}`)
        }
        // parse and update count of parsed hashes

        // also update the amount of read lines
        // after completion,
        // if errors then report them to the user with a modal. 
        // else update allowVerificationPage state to true

    }
)

const newTask = createSlice({
    name: "newTask",
    initialState: {
        hashlistVerified: false,
        selectedHashType: '-1',
        wizardStepIdReached: 1,
        hashlistFile: undefined,
        hashlist: [],
        rejectedHashlist: [],
    } as NewTaskState,
    reducers: {
        selectedHashType: (state, action: PayloadAction<string>) => {
            state.selectedHashType = action.payload;
        },
        stepIdReached: (state, action: PayloadAction<number>) => {
            state.wizardStepIdReached = action.payload;
        },
        failedParsingHash: (state, action: PayloadAction<string>) => {
            state.rejectedHashlist.push(action.payload);
        },
        parsedHash: (state, action: PayloadAction<string>) => {
            state.hashlist.push(action.payload);
        },
        hashlistVerificationChanged: (state, action: PayloadAction<boolean>) => {
            state.hashlistVerified = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(verifyHashlist.fulfilled, (state) => {
                state.hashlistVerified = true;
            })
            .addCase(verifyHashlist.rejected, (state, action: AnyAction) => {
                toast.error(action.payload);
                state.hashlistVerified = false;
            })
            .addCase(verifyHashlist.pending, (state) => {
                state.hashlist = [];
                state.rejectedHashlist = [];
                state.hashlistVerified = false;
            })

    }
});

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        newTask: builder.mutation({
            query: (task) => '/task/new'
        })
    })
})

export default newTask;
export const selectSelectedHashType = (state: AppState) => state.newTask.selectedHashType;
export const selectWizardStepReached = (state: AppState) => state.newTask.wizardStepIdReached;
export const selectHashlistVerified = (state: AppState) => state.newTask.hashlistVerified;
export const selectParsedHashlist = (state: AppState) => state.newTask.hashlist;
export const selectRejectedHashlist = (state: AppState) => state.newTask.rejectedHashlist;
export const { selectedHashType, stepIdReached, parsedHash, failedParsingHash, hashlistVerificationChanged } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
