import IntialCheck from "@/components/ui/InitialCheck";
import Loading from "@/components/ui/Loading";
import { selectCaptchaValidated } from "@/features/Captcha/captchaSlice";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "./_app";
const MainPage = lazy(() => import("@/components/MainPage"));
const Home: NextPageWithLayout = () => {
  const captchaValidated = useSelector(selectCaptchaValidated);

  return (
    <>
      <Head>
        <title>Crackq.Me</title>
        <meta name="description" content="crackq.me: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <div className={styles.main}>
          {/* TODO: Use Spinner */}
          {!captchaValidated ? (
            <IntialCheck />
          ) : (
            <Suspense fallback={<Loading />}>
              <MainPage />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
