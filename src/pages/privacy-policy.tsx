import type { NextPage } from 'next'
import PrivacyPolicyContainer from '../infra/containers/PrivacyPolicy';
import Footer from '../infra/layout/Footer';
import Nav from '../infra/layout/Nav'
import styles from '../styles/Home.module.css';



const Contact: NextPage = () => {

    return (
        <div className={styles.container}>
            <Nav />
            <main className={styles.main}>
                <PrivacyPolicyContainer />
            </main>
            <Footer />
        </div>
    )
}

export default Contact
