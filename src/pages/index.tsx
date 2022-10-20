import type { NextPage } from 'next'
import { HomeContainer } from '../infra/containers/Home'
import Footer from '../infra/layout/Footer'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <Nav />

      <main className={styles.main}>
        <HomeContainer />
      </main>

      <Footer />
    </div>
  )
}

export default Home
