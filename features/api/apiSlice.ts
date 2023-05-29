// Import the RTK Query methods from the React-specific entry point
import { CAPTCHA_HEADER_TOKEN } from "@/assets/constants";
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
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as AppState;
      // Add Captcha Token if present.
      if (state.captcha.token) {
        headers.set(CAPTCHA_HEADER_TOKEN, state.captcha.token);
      }
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
