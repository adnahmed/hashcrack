import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@/lib/redux/store";
import { apiSlice } from "@/features/api/apiSlice";

export type CaptchaState = {
  verified: boolean;
  token: string | null;
};

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaptcha: builder.query<{ captcha: string }, null>({
      query: () => ({
        url: "/api/captcha",
        method: "GET",
      }),
    }),
    verifyCaptcha: builder.mutation<CaptchaState, string>({
      query: (answer) => ({
        url: `/api/captcha/verify`,
        method: "POST",
        body: { answer },
      }),
    }),
  }),
});

export const captcha = createSlice({
  name: "captcha",
  initialState: { result: { verified: false, token: null } as CaptchaState },
  reducers: {
    captchaVerified(state, action) {
      (state.result.verified = true),
        (state.result.token = action.payload.token);
    },
  },
});

export const { captchaVerified } = captcha.actions;
export const selectCaptchaVerified = (state: AppState) =>
  state.captcha.result.verified;
export const { useGetCaptchaQuery, useVerifyCaptchaMutation } =
  extendedApiSlice;
