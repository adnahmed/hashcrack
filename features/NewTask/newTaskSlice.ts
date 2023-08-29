import { AppState } from "@/lib/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { activeTabChanged } from "../Navigation/navigationSlice";
import { apiSlice } from "../api/apiSlice";
import { verifyHashlist } from "./verifyHashlistThunk";
export enum Configuration {
    BASIC
}
interface NewTaskState {
    acceptedTermsAndConditions: boolean;
    selectedConfig?: Configuration;
    resultEmail: string;
    attackConfigured: boolean;
    verifyingHashlist: boolean;
    hashlistVerified: boolean;
    selectedHashType: string;
    hashlistFile?: string;
    hashlistFileType?: string;
    hashlistFileSize?: number;
    hashlist: string[];
    rejectedHashlist: string[]
    privacyMode: boolean;
}

const ResetWizard = (state: NewTaskState, action: PayloadAction<number>) => {
    // TODO: replace magic number 1 with Tabs Label enum.
    if (action.type === `${activeTabChanged.name}/activeTabChanged` && action.payload === 1 /* Add New Task Tab */) {
        return;
    }
    state.selectedHashType = "-1";
    state.privacyMode = false;
    state.resultEmail = '';
    state.hashlistFileType = undefined;
    state.hashlistVerified = false;
    state.attackConfigured = false;
    state.verifyingHashlist = false;
    state.selectedConfig = undefined;
    if (state.hashlistFile) {
        state.hashlistFileType = undefined;
        state.hashlistFileSize = undefined;
        URL.revokeObjectURL(state.hashlistFile)
    }
    state.hashlistFile = undefined;
    state.hashlist = [];
    state.rejectedHashlist = [];
}

const newTask = createSlice({
    name: "newTask",
    initialState: {
        selectedConfig: undefined,
        resultEmail: '',
        acceptedTermsAndConditions: false,
        privacyMode: false,
        attackConfigured: false,
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
        changedPrivacyMode: (state, action: PayloadAction<boolean>) => {
            state.privacyMode = action.payload;
        },
        changedResultEmail: (state, action: PayloadAction<string>) => {
            state.resultEmail = action.payload;
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
        changedTermsAndConditions: (state, action: PayloadAction<boolean>) => {
            state.acceptedTermsAndConditions = action.payload
        },
        parsedHash: (state, action: PayloadAction<string>) => {
            state.hashlist.push(action.payload);
        },
        hashlistVerificationChanged: (state, action: PayloadAction<boolean>) => {
            state.hashlistVerified = action.payload;
        },
        selectedConfig: (state, action: PayloadAction<Configuration | undefined>) => {
            state.selectedConfig = action.payload;
            if (action.payload === undefined) {
                state.attackConfigured = false;
            }
            if (action.payload === Configuration.BASIC) {
                state.attackConfigured = true;
            }
        },
        resettedWizard: ResetWizard
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
            .addCase(verifyHashlist.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(activeTabChanged, ResetWizard)
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
export const selectTermsAndConditions = (state: AppState) => state.newTask.acceptedTermsAndConditions;
export const selectPrivacyMode = (state: AppState) => state.newTask.privacyMode;
export const selectResultEmail = (state: AppState) => state.newTask.resultEmail;
export const selectHashlistVerified = (state: AppState) => state.newTask.hashlistVerified;
export const selectHashlistFile = (state: AppState) => state.newTask.hashlistFile;
export const selectVerifyingHashlist = (state: AppState) => state.newTask.verifyingHashlist;
export const selectParsedHashlist = (state: AppState) => state.newTask.hashlist;
export const selectRejectedHashlist = (state: AppState) => state.newTask.rejectedHashlist;
export const selectAttackConfigured = (state: AppState) => state.newTask.attackConfigured;
export const selectSelectedConfig = (state: AppState) =>
    state.newTask.selectedConfig; export const { selectedHashType, parsedHash, failedParsingHash, hashlistVerificationChanged, selectedHashlistFile, resettedWizard, selectedConfig, changedPrivacyMode, changedResultEmail, changedTermsAndConditions } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
