import MainPage from "@/components/MainPage";
import IntialCheck from "@/components/ui/IntialCheck";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>CrackQ.Me</title>
        <meta name="description" content="crackq.me: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <IntialCheck>
          <MainPage />
        </IntialCheck>
      </main>
    </>
  );
};
export default Home;
