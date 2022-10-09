import Link from "next/link"
import style from "./index.module.css"

const Nav = () => {

    return (
        <nav className={style.nav}>
            <h1>
                <Link href="/">SaveDownHere</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/advertise">Advertise</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav