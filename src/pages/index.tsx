import type { NextPage } from 'next'
import { HomeContainer } from '../infra/containers/Home'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {

  return (
    <div className={styles.container}>

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
