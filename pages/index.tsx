import Layout from "@/components/Layout";
import Stats from "@/components/Stats";
import NewTask from "@/features/NewTask/NewTask";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";
const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>HashCrack</title>
        <meta name="description" content="HashCrack: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Stats />
        <TaskQueue />
        <NewTask />
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function TaskQueue() {
  return <div></div>;
}
