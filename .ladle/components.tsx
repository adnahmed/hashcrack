import type { GlobalProvider } from "@ladle/react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../lib/redux/store";

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <ReduxProvider store={store}>
    <h1>Theme: {globalState.theme}</h1>
    <div
      style={{
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  </ReduxProvider>
);
