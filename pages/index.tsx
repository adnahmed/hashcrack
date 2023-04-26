import MainPage from "@/components/MainPage";
import IntialCheck from "@/components/ui/InitialCheck";
import { selectCaptchaValidated } from "@/features/Captcha/captchaSlice";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
  const captchaValidated = useSelector(selectCaptchaValidated);

  return (
    <>
      <Head>
        <title>Crackq.Me</title>
        <meta name="description" content="crackq.me: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        {/* TODO: Use Spinner */}
        <Suspense fallback={<div>Loading...</div>}>
          {!captchaValidated ? <IntialCheck /> : <MainPage />}
        </Suspense>
      </div>
    </>
  );
};
export default Home;
