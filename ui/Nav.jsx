import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import {useRouter} from 'next/router'
import logo from '../assets/logo.svg'
import Image from 'next/image'

export const Nav = () => {
    const router = useRouter()

    function clearSearch(event){
        event.target.value =''
    }
    function searchResult(event)
    {
        // console.log(router.asPath)
       if(event.key ==='Enter'){
           router.push(`/price/${event.target.value}`)
            clearSearch(event)
       }
    }
    return (
        <nav>
            <div className={navStyles.wrapper}>
                <Link href="/">
                    <a className={navStyles.home}>
                        <Image src={logo.src}
                        width={200}
                        height={300}
                        // layout='responsive'
                        className={navStyles.logo}
                        ></Image>
                    </a>
                </Link>
                {
                    (router.asPath.includes('/page')||
                    router.asPath.includes('/price'))?
                    <div className={navStyles.link_container}>
                        <div className={navStyles.search_container}>
                            <FontAwesomeIcon icon={faSearch}/>
                            <input className={navStyles.search}
                            type='search' placeholder='Search'
                            onClick={(e)=> clearSearch(e)}
                            onKeyDown={(e)=> searchResult(e)}></input>
                            {/* <button className={navStyles.search}
                            onClick={()=>showSearch()}>
                                Search
                                <div className='btn_search'></div>
                            </button> */}
                        </div>      
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                                <Link href="/news">News</Link>
                                <Link href="/page/1">Prices</Link>
                            </li>
                        </ul>
                    </div>:
                    <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <Link href="/news">News</Link>
                        <Link href="/page/1">Prices</Link>
                    </li>
                    </ul>
                }
                
            </div>
        </nav>
    )
}
