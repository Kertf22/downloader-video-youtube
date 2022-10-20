

import type { NextPage } from 'next'
import { ContactContainer } from '../infra/containers/Contact'
import Footer from '../infra/layout/Footer'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Contact: NextPage = () => {

  return (
    <div className={styles.container}>

      <Nav />

      <main className={styles.main}>
        <ContactContainer />
      </main>

      <Footer />
    </div>
  )
}

export default Contact
