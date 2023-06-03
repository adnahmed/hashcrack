import store from "@/lib/redux/store";
import "@/styles/globals.scss";
import localFont from "@next/font/local";
import "@total-typescript/ts-reset";
import { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";

// Font files can be colocated inside of `app`
export const inter = localFont({
  src: "../assets/inter.woff2",
  display: "swap",
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // TODO: Report metrics to Analytics.
  console.log(metric);
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <ErrorBoundary>
        {getLayout(
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ErrorBoundary>
    </Provider >
  );
}
