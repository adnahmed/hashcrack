// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

/* Pagination */
export interface ListResponse<T> {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
}

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) return action.payload[reducerPath]
    },
    tagTypes: [],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.APP_URL }), // TODO: check and verify proper envs
    endpoints: builder => ({
        /* Global Endpoints */
    })
})

// Export the auto-generated hook 
export const { util: { getRunningQueriesThunk } } = apiSlice