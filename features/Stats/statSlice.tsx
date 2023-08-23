import { apiSlice } from '@/features/api/apiSlice';
interface HostInfo {
    code: number;
}
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
