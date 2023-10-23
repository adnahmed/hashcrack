// Import the RTK Query methods from the React-specific entry point
import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export type FetchError = {
  data: {
    errors?: string[];
    message?: string;
    stack: string;
    statusCode: number;
  };
  status: number;
}

export const isFetchError = (err: unknown): err is FetchError => {
  return (err as FetchError).data !== undefined;
}

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
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, FetchError>>(fetchBaseQuery({
    baseUrl: "/",
    credentials: "include",
  })),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({
    /* Global Endpoints */
  }),
});

// Export the auto-generated hook
export const {
  util: { getRunningQueriesThunk },
} = apiSlice;

export const isTypeError = (err: unknown): err is TypeError =>
  ((err as TypeError).message !== undefined && typeof (err) === 'string')