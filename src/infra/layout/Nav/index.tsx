import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import style from "./index.module.css"
import { AiOutlineClose } from "react-icons/ai"

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className={style.nav}>
            <h1>
                <Link href="/">SaveDownHere</Link>
            </h1>

            {!showMenu && <GiHamburgerMenu onClick={() => toggleMenu()} />}

            <ul style={{
                transition: "all 0.2s ease",
                transform: showMenu ? "translateX(0)" : "translateX(100%)"
            }}>
                <li>{showMenu &&
                    <AiOutlineClose onClick={() => toggleMenu()} />
                } </li>
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