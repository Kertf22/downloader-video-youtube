import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <Link href="/privacy-policy">Privacy Policy</Link>

            <span>
                All rights reserved © SaveDownHere 2022
            </span>

            <span>
                Powered by Paulo Hercílio
            </span>


        </footer>
    )
};

export default Footer;