import { apiSlice } from '@/features/api/apiSlice';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { rtkQueryErrorLogger } from './errorLoggerMiddleware';

export function makeStore() {
    return configureStore({
        reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
        devTools: process.env.NODE_ENV === 'development',
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat([apiSlice.middleware, rtkQueryErrorLogger])
    })
}
const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>
export default store;