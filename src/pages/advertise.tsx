

import type { NextPage } from 'next'
import { AdvertiseContainer } from '../infra/containers/Advertise'
import Footer from '../infra/layout/Footer'
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css'
const Advertise: NextPage = () => {

    return (
        <div className={styles.container}>

            <Nav />

            <main className={styles.main}>
                <AdvertiseContainer />
            </main>

            <Footer />
        </div>
    )
}

export default Advertise;
