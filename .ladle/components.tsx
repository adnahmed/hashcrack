import type { GlobalProvider } from "@ladle/react";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../lib/redux/store";

// Font files can be colocated inside of `app`
export const inter = localFont({
  src: "../data/inter.woff2",
  display: "swap",
});

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <ReduxProvider store={store}>
    <h1>Theme: {globalState.theme}</h1>
    <ThemeProvider>
      <div
        style={{
          border: "1px solid black",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
    <div className={inter.className}>{children}</div>
  </ReduxProvider>
);
