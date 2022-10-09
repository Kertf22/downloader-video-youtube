import type { NextPage } from 'next'
import { HomeContainer } from '../infra/containers/Home'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <Nav />

      <main className={styles.main}>
        <HomeContainer />
      </main>

      <footer className={styles.footer}>
        <span>
          All rights reserved © SaveDownHere 2022
        </span>

        <span>
          Powered by Paulo Hercílio
        </span>

      </footer>
    </div>
  )
}

export default Home
