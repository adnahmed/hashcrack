import store from "@/lib/redux/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "@total-typescript/ts-reset";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
      </NextUIProvider>
    </Provider>
  );
}
