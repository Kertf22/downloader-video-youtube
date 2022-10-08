import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeContainer } from '../infra/containers/Home'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>SaveDownHere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9390787688776809"
          crossOrigin="anonymous"></script>
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
