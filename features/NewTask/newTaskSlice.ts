import { AppState } from "@/lib/redux/store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FileWithPath } from "react-dropzone";
import toast from "react-hot-toast";
import { WPACaptureFileTypes } from "../HashInput/HashTypes/Wireless/EAPOL";
import { apiSlice } from "../api/apiSlice";
interface NewTaskState {
    selectedHashType: string;
    wizardStepIdReached: number;
    parsedHashes: string[],
    inputMethod: "textarea" | "file" | undefined;
    hashlistFile: FileWithPath | undefined;
    hashlist: string[];
    allowVerificationPage: boolean;
}

interface VerifyHashlistArgs {
    inputMethod: 'textarea' | 'file';
    hashlistFile?: FileWithPath;
    hashlist?: string[];
}
export const verifyHashlist = createAsyncThunk<undefined, VerifyHashlistArgs>(
    'newTask/verifyHashlist', async ({ inputMethod, hashlist, hashlistFile }, thunkAPI) => {
        if (!hashlistFile && !hashlist) return;
        const parsedHashes: string[] = [];
        try {
            switch (inputMethod) {
                case 'textarea':
                    hashlist;
                    break;
                case 'file':
                    if (!hashlistFile) return;
                    const type = hashlistFile.path?.split('.')?.pop();
                    if (!type || !WPACaptureFileTypes.includes(`.${type}`))
                        return thunkAPI.rejectWithValue(`Invalid File, expected ${WPACaptureFileTypes.join(', ')}, got ${type}`);
                    const data = await hashlistFile?.arrayBuffer();
                    thunkAPI.fulfillWithValue(text);
                    break;
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
        selectedHashType: '-1',
        wizardStepIdReached: 1,
        parsedHashes: [],
        inputMethod: undefined,
        hashlistFile: undefined,
        hashlist: [],
        allowVerificationPage: false,
    } as NewTaskState,
    reducers: {
        selectedHashType: (state, action: PayloadAction<string>) => {
            state.selectedHashType = action.payload;
        },
        stepIdReached: (state, action: PayloadAction<number>) => {
            state.wizardStepIdReached = action.payload;
        },
        parsedHashesChanged: (state, action: PayloadAction<string[]>) => {
            state.parsedHashes = action.payload;
        },
        inputMethodChanged: (state, action: PayloadAction<NewTaskState['inputMethod'] | undefined>) => {
            state.inputMethod = action.payload;
        },
        hashlistTextChanged: (state, action: PayloadAction<string[]>) => {
            state.hashlist = action.payload;
        },
        hashlistFileSelected: (state, action: PayloadAction<FileWithPath | undefined>) => {
            state.hashlistFile = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(verifyHashlist.fulfilled, (state, action) => {
                console.log('hashlist verified', state, action);
            })
            .addCase(verifyHashlist.rejected, (state, action) => {
                console.error('hashlist rejected', state, action);
            })
            .addCase(verifyHashlist.pending, (state, action) => {
                console.log('hashlist pending', state, action);
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
export const selectVerificationState = (state: AppState) => state.newTask.inputMethod;
export const { selectedHashType, stepIdReached, parsedHashesChanged, inputMethodChanged, hashlistTextChanged, hashlistFileSelected } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
