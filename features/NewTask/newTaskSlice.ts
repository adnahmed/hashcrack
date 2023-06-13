import { AppState } from "@/lib/redux/store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FileWithPath } from "react-dropzone";
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
