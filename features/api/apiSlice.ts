// Import the RTK Query methods from the React-specific entry point
import { AppState } from "@/lib/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

/* Pagination */
export interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

// Define our single API slice object
export const apiSlice = createApi({
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  // TODO: check and verify proper envs
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const state = getState() as AppState;
      // state.api
      // if (token) {
      // headers.set('captcha_token', token)
      // }
      return headers;
    },
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({
    /* Global Endpoints */
  }),
});

// Export the auto-generated hook
export const {
  util: { getRunningQueriesThunk },
} = apiSlice;
