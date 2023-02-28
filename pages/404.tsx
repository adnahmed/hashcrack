import Head from "next/head";

// pages/404.js
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="HashCrack: Page Not Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>404 - Page Not Found </h1>
      </main>
    </>
  );
}
