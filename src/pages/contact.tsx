

import type { NextPage } from 'next'
import { ContactContainer } from '../infra/containers/Contact'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Contact: NextPage = () => {

  return (
    <div className={styles.container}>

      <Nav />

      <main className={styles.main}>
        <ContactContainer />
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

export default Contact
