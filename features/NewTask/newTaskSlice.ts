import { AppState } from "@/lib/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
interface NewTaskState {
    selectedHashType: string;
    wizardStepIdReached: number;
    verificationState: "verifying" | "verified" | "unverified";
}
const newTask = createSlice({
    name: "newTask",
    initialState: {
        selectedHashType: '-1',
        wizardStepIdReached: 1,
        verificationState: "unverified",
    } as NewTaskState,
    reducers: {
        selectedHashType: (state, action: PayloadAction<string>) => {
            state.selectedHashType = action.payload;
        },
        stepIdReached: (state, action: PayloadAction<number>) => {
            state.wizardStepIdReached = action.payload;
        },
        initiatedVerifyHashList: (state, action: PayloadAction<NewTaskState['verificationState']>) => {
            state.verificationState = action.payload;
        }
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
export const selectVerificationState = (state: AppState) => state.newTask.verificationState;
export const { selectedHashType, stepIdReached, initiatedVerifyHashList } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
