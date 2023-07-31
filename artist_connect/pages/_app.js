import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
