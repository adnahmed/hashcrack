import store from "@/lib/redux/store";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import "@total-typescript/ts-reset";
import { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
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
          <main className={inter.className}>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </main>
        )}
      </ErrorBoundary>
    </Provider>
  );
}
