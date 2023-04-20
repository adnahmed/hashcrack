import Captcha from "@/features/Captcha/Captcha";
import { selectCaptchaValidated } from "@/features/Captcha/captchaSlice";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const captchaValidated = useSelector(selectCaptchaValidated);
  return (
    <>
      <Head>
        <title>crackq.me</title>
        <meta name="description" content="crackq.me: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!captchaValidated ? <Captcha /> : <>Welcome to CrackQ!</>}
      </main>
    </>
  );
};

export default Home;
