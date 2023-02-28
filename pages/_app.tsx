import fetchJson from "@/lib/fetcher";
import logger from "@/lib/req-logger";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "@total-typescript/ts-reset";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { SWRConfig } from "swr";
import ErrorBoundary from "../components/ErrorBoundary";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const SWROptions = {
  use: [logger],
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    // Never retry on 404.
    if (error.status === 404) return;

    // Never retry for a specific key.
    if (key === "/api/user") return;

    // Only retry up to 10 times.
    if (retryCount >= 10) return;

    // Retry after 5 seconds.
    setTimeout(() => revalidate({ retryCount }), 5000);
  },
  provider: () => {
    return new Map();
    /*
          // When initializing, we restore the data from `localStorage` into a map.
          const map = new Map(
            JSON.parse(localStorage.getItem("app-cache") || "[]")
          );

          // Before unloading the app, we write back all the data into `localStorage`.
          window.addEventListener("beforeunload", () => {
            const appCache = JSON.stringify(Array.from(map.entries()));
            localStorage.setItem("app-cache", appCache);
          });

          // We still use the map for write & read for performance.
          return map;
          */
  },
  fetcher: fetchJson,
  onError: (err) => {
    if (err.status !== 403 && err.status !== 404) {
      // We can send the error to Sentry,
      // or show a notification UI.
    }
    console.log(err);
  },
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SWRConfig value={SWROptions}>
      <NextUIProvider>
        <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
      </NextUIProvider>
    </SWRConfig>
  );
}
