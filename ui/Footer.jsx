import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.svg'
import footerStyles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <Link href='/' className={footerStyles.link}>
                <Image src={logo.src} alt=""
                className={footerStyles.img} 
                width={300}
                height={300}/>
            </Link>
        </footer>
    )
}

export default Footer
