

import type { NextPage } from 'next'
import { AdvertiseContainer } from '../infra/containers/Advertise'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Advertise: NextPage = () => {

    return (
        <div className={styles.container}>

            <Nav />

            <main className={styles.main}>
                <AdvertiseContainer />
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

export default Advertise;
