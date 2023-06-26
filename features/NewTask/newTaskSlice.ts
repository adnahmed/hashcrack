import { AppState } from "@/lib/redux/store";
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { activeTabChanged } from "../Navigation/navigationSlice";
import { apiSlice } from "../api/apiSlice";
import { verifyHashlist } from "./verifyHashlistThunk";
interface NewTaskState {
    verifyingHashlist: boolean;
    hashlistVerified: boolean;
    selectedHashType: string;
    hashlistFile?: string;
    hashlistFileType?: string;
    hashlistFileSize?: number;
    hashlist: string[];
    rejectedHashlist: string[]
}

const newTask = createSlice({
    name: "newTask",
    initialState: {
        verifyingHashlist: false,
        hashlistVerified: false,
        selectedHashType: '-1',
        hashlistFile: undefined,
        hashlistFileType: undefined,
        hashlistFileSize: undefined,
        hashlist: [],
        rejectedHashlist: [],
    } as NewTaskState,
    reducers: {
        selectedHashType: (state, action: PayloadAction<string>) => {
            state.selectedHashType = action.payload;
        },
        failedParsingHash: (state, action: PayloadAction<string>) => {
            state.rejectedHashlist.push(action.payload);
        },
        selectedHashlistFile: (state, action: PayloadAction<
            {
                dataUrl: string;
                type: string;
                size: number;
            }
        >) => {
            state.hashlistFile = action.payload.dataUrl;
            state.hashlistFileType = action.payload.type;
            state.hashlistFileSize = action.payload.size;
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
                state.verifyingHashlist = false;
                state.hashlistVerified = true;
                if (state.hashlistFile) {
                    state.hashlistFileType = undefined;
                    state.hashlistFileSize = undefined;
                    URL.revokeObjectURL(state.hashlistFile)
                }
            })
            .addCase(verifyHashlist.rejected, (state, action: AnyAction) => {
                toast.error(action.payload);
                state.verifyingHashlist = false;
                state.hashlistVerified = false;
                if (state.hashlistFile) {
                    state.hashlistFileType = undefined;
                    state.hashlistFileSize = undefined;
                    URL.revokeObjectURL(state.hashlistFile)
                }
            })
            .addCase(verifyHashlist.pending, (state) => {
                state.verifyingHashlist = true;
                state.hashlist = [];
                state.rejectedHashlist = [];
                state.hashlistVerified = false;
            })
            .addCase(activeTabChanged, (state, action) => {
                if (action.payload === 1) {
                    return;
                }
                state.selectedHashType = "-1";
                state.hashlistFile = undefined;
                state.hashlistFileType = undefined;
                state.hashlistVerified = false;
                state.verifyingHashlist = false;
                if (state.hashlistFile) {
                    state.hashlistFileType = undefined;
                    state.hashlistFileSize = undefined;
                    URL.revokeObjectURL(state.hashlistFile)
                }
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
export const selectHashlistVerified = (state: AppState) => state.newTask.hashlistVerified;
export const selectHashlistFile = (state: AppState) => state.newTask.hashlistFile;
export const selectVerifyingHashlist = (state: AppState) => state.newTask.verifyingHashlist;
export const selectParsedHashlist = (state: AppState) => state.newTask.hashlist;
export const selectRejectedHashlist = (state: AppState) => state.newTask.rejectedHashlist;
export const { selectedHashType, parsedHash, failedParsingHash, hashlistVerificationChanged, selectedHashlistFile } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
