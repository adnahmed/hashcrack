import { ErrorWithMessage, isErrorWithMessage } from '@/lib/error';
import { AppState } from '@/lib/redux/store';
import { SubmittedTask } from '@/pages/api/task/submit';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { activeTabChanged } from '../Navigation/navigationSlice';
import { apiSlice } from '../api/apiSlice';
import { verifyHashlist } from './verifyHashlistThunk';
export enum Configuration {
    BASIC,
}

export interface AccessPoint {
    essid: string;
    bssid: string;
    stmac: string;
    mic: string[];
    authenticatedHandshakes?: number;
}
type ConfigurationData = unknown;
export interface TaskData {
    acceptedTermsAndConditions: boolean;
    handshakes?: AccessPoint[];
    selectedConfig?: Configuration;
    configData?: ConfigurationData;
    resultEmail: string;
    selectedHashType: string;
    hashlist: string[];
    rejectedHashlist: string[];
    privacyMode: boolean;
}
export interface NewTaskState extends TaskData {
    hashlistVerified: boolean;
    attackConfigured: boolean;
    createdTasks: SubmittedTask[];
    verifyingHashlist: boolean;
    hashlistFile?: string;
    hashlistFileType?: string;
    hashlistFileSize?: number;
}

const ResetWizard = (state: NewTaskState, action: PayloadAction<number>) => {
    // TODO: replace magic number 1 with Tabs Label enum.
    if (action.type === `${activeTabChanged.name}/activeTabChanged` && action.payload === 1 /* Add New Task Tab */) {
        return;
    }
    state.selectedHashType = '-1';
    state.handshakes = undefined;
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
        URL.revokeObjectURL(state.hashlistFile);
    }
    state.hashlistFile = undefined;
    state.hashlist = [];
    state.rejectedHashlist = [];
};

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        submitTask: builder.mutation<SubmittedTask, TaskData>({
            query: (body) => ({ url: '/api/task/submit', method: 'POST', body }),
        }),
    }),
});

const newTask = createSlice({
    name: 'newTask',
    initialState: {
        selectedConfig: undefined,
        createdTasks: [],
        resultEmail: '',
        acceptedTermsAndConditions: false,
        privacyMode: false,
        handshakes: undefined,
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
        setHandshakes: (state, action: PayloadAction<AccessPoint[]>) => {
            state.handshakes = action.payload;
        },
        selectedHashlistFile: (
            state,
            action: PayloadAction<{
                dataUrl: string;
                type: string;
                size: number;
            }>
        ) => {
            state.hashlistFile = action.payload.dataUrl;
            state.hashlistFileType = action.payload.type;
            state.hashlistFileSize = action.payload.size;
        },
        changedTermsAndConditions: (state, action: PayloadAction<boolean>) => {
            state.acceptedTermsAndConditions = action.payload;
        },
        parsedHash: (state, action: PayloadAction<string>) => {
            state.hashlist.push(action.payload);
        },
        createdTask: (state, action: PayloadAction<SubmittedTask>) => {
            state.createdTasks.push(action.payload);
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
        resettedWizard: ResetWizard,
    },

    extraReducers: (builder) => {
        builder
            .addCase(activeTabChanged, ResetWizard)
            .addMatcher(verifyHashlist.fulfilled.match, (state) => {
                state.verifyingHashlist = false;
                state.hashlistVerified = true;
            })
            .addMatcher<ErrorWithMessage>(verifyHashlist.rejected.match, (state, action) => {
                if (isErrorWithMessage(action.payload)) {
                    // TODO: log error
                }
                toast.error('Something went wrong while verifying hashlist.', { duration: 5000 });
                state.verifyingHashlist = false;
                state.hashlistVerified = false;
            })
            .addMatcher(verifyHashlist.pending.match, (state) => {
                state.verifyingHashlist = true;
                state.hashlist = [];
                state.rejectedHashlist = [];
                state.hashlistVerified = false;
            })
    },
});

export default newTask;
export const selectTaskData = (state: AppState) => state.newTask;
export const selectHandshakes = (state: AppState) => state.newTask.handshakes;
export const selectNumAuthenticated = (state: AppState) => state.newTask.handshakes?.reduce((prev, curr) => prev !== undefined && curr.authenticatedHandshakes !== undefined ? (prev + curr.authenticatedHandshakes) : prev, state.newTask.handshakes[0]?.authenticatedHandshakes !== undefined ? 0 : state.newTask.handshakes[0]?.authenticatedHandshakes);
export const createdTasks = (state: AppState) => state.newTask.createdTasks;
export const selectSelectedHashType = (state: AppState) => state.newTask.selectedHashType;
export const selectTermsAndConditions = (state: AppState) => state.newTask.acceptedTermsAndConditions;
export const selectPrivacyMode = (state: AppState) => state.newTask.privacyMode;
export const selectResultEmail = (state: AppState) => state.newTask.resultEmail;
export const selectHashlistVerified = (state: AppState) => state.newTask.hashlistVerified;
export const selectHashlistFile = (state: AppState) => state.newTask.hashlistFile;
export const selectHashlistFileType = (state: AppState) => state.newTask.hashlistFileType;
export const selectVerifyingHashlist = (state: AppState) => state.newTask.verifyingHashlist;
export const selectParsedHashlist = (state: AppState) => state.newTask.hashlist;
export const selectRejectedHashlist = (state: AppState) => state.newTask.rejectedHashlist;
export const selectAttackConfigured = (state: AppState) => state.newTask.attackConfigured;
export const selectSelectedConfig = (state: AppState) => state.newTask.selectedConfig;
export const { selectedHashType, parsedHash, failedParsingHash, hashlistVerificationChanged, selectedHashlistFile, resettedWizard, selectedConfig, changedPrivacyMode, changedResultEmail, changedTermsAndConditions, createdTask, setHandshakes } = newTask.actions;
export const { useSubmitTaskMutation } = extendedApiSlice;
