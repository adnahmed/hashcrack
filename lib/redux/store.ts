import captcha, { extendedApiSlice } from "@/features/Captcha/captchaSlice";
import navigation from "@/features/Navigation/navigationSlice";
import newTask from "@/features/NewTask/newTaskSlice";
import { apiSlice } from "@/features/api/apiSlice";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { rtkQueryErrorLogger } from "./errorLoggerMiddleware";

export function makeStore() {
  return configureStore({
    reducer: {
      [extendedApiSlice.reducerPath]: extendedApiSlice.reducer,
      captcha: captcha.reducer,
      navigation: navigation.reducer,
      newTask: newTask.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        apiSlice.middleware,
        rtkQueryErrorLogger,
        thunkMiddleware
      ),
    devTools: process.env.NODE_ENV === "development",
  });
}
const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export default store;
