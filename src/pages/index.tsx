import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeContainer } from '../infra/containers/Home'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>SaveDownHere — Download Videos</title>
        <meta name="description" content="Download youtube videos with high quality easily and fast" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.savedownhere.com/" />
        <meta property="og:title" content="SaveDownHere — Download Videos" />
        <meta property="og:description" content="Download youtube videos with high quality easily and fast" />

        <meta property="twitter:url" content="https://www.savedownhere.com/" />
        <meta property="twitter:title" content="SaveDownHere — Download Videos" />
        <meta property="twitter:description" content="Download youtube videos with high quality easily and fast"></meta>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9390787688776809"
          crossOrigin="anonymous"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W74SSDF6T5"></script>


      </Head>

      <header className={styles.header}>
        <h2>SaveDownHere</h2>
      </header>

      <main className={styles.main}>
        <HomeContainer />
      </main>

      <footer className={styles.footer}>
        Powered by Kertf
      </footer>
    </div>
  )
}

export default Home
