import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'

export const Nav = () => {
    return (
        <nav>
            <div className={navStyles.wrapper}>
                <Link href="/">
                    <a className={navStyles.home}>
                        <img src="https://crypto.com/price/_next/image.png?url=%2Fprice%2Fimages%2Flogos%2Fprice-logo-full-Xmas.svg&w=256&q=75"
                        className={navStyles.logo}
                        ></img>
                    </a>
                </Link>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <Link href="/news">News</Link>
                        <Link href="/page/1">Prices</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
