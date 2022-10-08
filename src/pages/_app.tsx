import '../styles/globals.css'
import React from "react";
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>SaveDownHere — Download Videos</title>
        <meta name="description" content="Download youtube videos with high quality easily and fast" />
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savedownhere.com/" />
        <meta property="og:title" content="SaveDownHere — Download Videos" />
        <meta property="og:description" content="Download youtube videos with high quality easily and fast" />

        <meta property="twitter:url" content="https://savedownhere.com/" />
        <meta property="twitter:title" content="SaveDownHere — Download Videos" />
        <meta property="twitter:description" content="Download youtube videos with high quality easily and fast"></meta>

        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9390787688776809"
          crossOrigin="anonymous"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W74SSDF6T5"></script>
      </Head>


      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
