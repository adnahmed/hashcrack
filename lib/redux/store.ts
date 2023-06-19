import { apiSlice } from "@/features/api/apiSlice";
import captcha, { extendedApiSlice } from "@/features/Captcha/captchaSlice";
import navigation from "@/features/Navigation/navigationSlice";
import newTask from "@/features/NewTask/newTaskSlice";
import wizard from "@/features/Wizard/wizardSlice";
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';
import { rtkQueryErrorLogger } from "./errorLoggerMiddleware";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  [extendedApiSlice.reducerPath]: extendedApiSlice.reducer,
  captcha: captcha.reducer,
  navigation: navigation.reducer,
  newTask: newTask.reducer,
  wizard: wizard.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// TODO: add next-redux-wrapper hydration.
const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(
        apiSlice.middleware,
        rtkQueryErrorLogger,
        thunkMiddleware,
      ),
    devTools: process.env.NODE_ENV === "development",
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const persistor = persistStore(store);