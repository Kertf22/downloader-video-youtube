import '../styles/globals.css'
import React from "react";
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import Script from 'next/script';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>

      <Head>
        <title>SaveDownHere — Download Videos</title>
        <meta name="description" content="Download youtubevideos with high quality easily and fast" />
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savedownhere.com/" />
        <meta property="og:title" content="SaveDownHere — Download Videos" />
        <meta property="og:description" content="Download youtube videos with high quality easily and fast" />

        <meta property="twitter:url" content="https://savedownhere.com/" />
        <meta property="twitter:title" content="SaveDownHere — Download Videos" />
        <meta property="twitter:description" content="Download youtube videos with high quality easily and fast"></meta>

      </Head>

      <Script async
        strategy="beforeInteractive"
        id='google-adsense'
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
      />


      <Script
        strategy="beforeInteractive"
        id='google-analytics'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="beforeInteractive" id='google-analytics-code'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
