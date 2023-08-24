import { apiSlice } from '@/features/api/apiSlice';
import { AppState } from '@/lib/redux/store';
import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        validateToken: builder.mutation<TurnstileServerValidationResponse, string>({
            query: (token) => ({
                url: `/api/captcha/verify`,
                method: 'POST',
                body: { token },
            }),
        }),
    }),
});

export type CaptchaState = {
    validated: boolean;
    errors: TurnstileServerValidationResponse['error-codes'];
    canRetry: boolean;
};

const captcha = createSlice({
    name: 'captcha',
    initialState: {
        validated: process.env.NODE_ENV === 'development',
        canRetry: true,
    } as CaptchaState,
    reducers: {
        tokenValidated: (state, action: PayloadAction<string>) => {
            state.validated = true;
        },
        captchaFailed: (state, action: PayloadAction<TurnstileServerValidationResponse['error-codes']>) => {
            state.validated = false;
            if (action.payload) {
                state.errors = action.payload;
                if (action.payload.includes('invalid-input-response')) state.canRetry = false;
            }
        },
    },
});

export default captcha;
export const selectCaptchaErrors = (state: AppState) => state.captcha.errors;
export const selectCaptchaValidated = (state: AppState) => state.captcha.validated;
export const selectCanRetryCaptcha = (state: AppState) => state.captcha.canRetry;
export const { tokenValidated, captchaFailed } = captcha.actions;
export const { useValidateTokenMutation } = extendedApiSlice;
