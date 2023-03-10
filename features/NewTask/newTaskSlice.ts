import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addTask: builder.mutation({
            query: (task) => '/task/new'
        }),
        getCaptcha: builder.query<{ captcha: string }, null>({
            query: () => ({
                url: '/api/captcha',
                method: 'GET'
            })
        }),
        verifyCaptcha: builder.mutation<{ result: boolean }, string>({
            query: (answer) => ({
                url: `/api/captcha/verify`,
                method: 'POST',
                body: { answer }
            })
        })
    })
})


export const { useAddTaskMutation, useGetCaptchaQuery, useVerifyCaptchaMutation } = extendedApiSlice
