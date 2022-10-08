import '../styles/globals.css'
import React from "react";
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9390787688776809"
        crossOrigin="anonymous">
          
        </script>

      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
