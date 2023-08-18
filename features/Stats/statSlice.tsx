import { apiSlice } from '@/features/api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHosts: builder.query<HostInfo, undefined>({
            query: () => ({
                url: `/api/status/hosts`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetHostsQuery } = extendedApiSlice;
