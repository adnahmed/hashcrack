import { AppState } from "@/lib/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
interface NewTaskState {
    selectedHashType: string;
}
const newTask = createSlice({
    name: "newTask",
    initialState: {
        selectedHashType: '-1'
    } as NewTaskState,
    reducers: {
        selectedHashType: (state, action: PayloadAction<string>) => {
            state.selectedHashType = action.payload;
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
export const selectSelectedHashType = (state: AppState) =>
    state.newTask.selectedHashType;
export const { selectedHashType } = newTask.actions;
export const { useNewTaskMutation } = extendedApiSlice
