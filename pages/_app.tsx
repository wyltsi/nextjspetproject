import * as React from "react";
import "../styles/globals.css";
import "../styles/postStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
