import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addTask: builder.mutation({
            query: (task) => '/task/new'
        })
    })
})


export const { useAddTaskMutation } = extendedApiSlice
