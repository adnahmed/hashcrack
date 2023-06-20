import { apiSlice } from "@/features/api/apiSlice";
import captcha, { extendedApiSlice } from "@/features/Captcha/captchaSlice";
import navigation from "@/features/Navigation/navigationSlice";
import newTask from "@/features/NewTask/newTaskSlice";
import wizard from "@/features/Wizard/wizardSlice";
import { Action, AnyAction, CombinedState, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { rtkQueryErrorLogger } from "./errorLoggerMiddleware";


const combinedReducer = combineReducers({
  [extendedApiSlice.reducerPath]: extendedApiSlice.reducer,
  captcha: captcha.reducer,
  navigation: navigation.reducer,
  newTask: newTask.reducer,
  wizard: wizard.reducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else
    return combinedReducer(state, action)
}

const makeConfiguredStore = (reducer: CombinedState<typeof rootReducer>) => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(
      apiSlice.middleware,
      rtkQueryErrorLogger,
      thunkMiddleware,
    ),
  devTools: process.env.NODE_ENV === "development",
});


export const makeStore = () => {
  return makeConfiguredStore(rootReducer);
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

const wrapper = createWrapper<AppState>(makeStore, { debug: process.env.NODE_ENV === "development" });
export default wrapper;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;