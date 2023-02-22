import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HashCrack</title>
        <meta name="description" content="HashCrack: Hashcat as a Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.bottomBorder}>HashCrack</h1>
        </div>
        <li className={styles.navbar}>
          <ul>Tasks queue</ul>
          <ul>Add new task</ul>
          <ul>Get Result</ul>
          <ul>Verify Service</ul>
          <ul>Contact Us</ul>
        </li>
        <Suspense fallback={<div>Loading...</div>}>
          <Stats />
        </Suspense>
      </main>
    </>
  );
}

enum GPUState {
  IDLE = "IDLE",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

function Stats() {
  return (
    <div className={styles.stats}>
      <p>Tasks queued: user </p>
      <p>WPA processed:</p>
      <p>WPA cracked: %</p>
      <p>Hashes processed: _. </p>
      <p>Hashes cracked: %</p>
      <p>GPU cluster spped: user</p>
    </div>
  );
}
function useGPUState() {
  return GPUState.IDLE;
}
function GPUStatus() {
  return (
    <div className={styles.tooltip}>
      <p>status </p>
    </div>
  );
}
