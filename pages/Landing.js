import React, { useEffect, useState } from 'react'
import { Percent } from '../ui/Percent'
import landingStyles from '../styles/Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Landing = ({ coins }) => {
    function scrollTop(event){
        // event.preventDefault()
        // const el = document.getElementsByTagName('main')[1]
        // console.log(el)
        event.target.style.opacity = 1
    }
    const [pic, setPic] = useState()
    useEffect(() => {
        const image = new Image()
        image.src = "https://crypto.com/static/b4294bb911b426799dfae7340dba840a/ff3b2/buy-and-sell.png"

        setPic(image)
    },[])
    return (
        <div className={landingStyles.container}
        // onWheel={scrollTop}
        >
            <main className={landingStyles.row}>
                <section className={landingStyles.landing}>
                    <h1 className={landingStyles.title}>
                        The World’s Fastest Growing Crypto App</h1>
                    <div className={landingStyles.landing_desc}>
                        <p> Join <span className={landingStyles.blue}>10m+</span> users buying and selling
                            <span className={landingStyles.blue}> 200+ cryptocurrencies at true cost</span></p>

                        <p> Spend with the Crypto.com Visa Card and
                            <span className={landingStyles.blue}> get up to 8%</span> back</p>

                        <p> Grow your portfolio by
                            <span className={landingStyles.blue}> receiving rewards up to 14.5% </span>
                            on your crypto assets</p>
                    </div>
                </section>
                <figure className={landingStyles.phone_wrapper}>
                    {
                        pic? <img src={pic.src}
                        className={landingStyles.phone}></img>
                        :
                        <div className={landingStyles.skeleton_phone}>

                        </div>
                    }
                    
                </figure>
                <section id={landingStyles.buy}>
                    <div className={landingStyles.buy}>
                        <h2 className={landingStyles.sub_title}><span className={landingStyles.blue}>SECURELY BUY, SELL, STORE, SEND and TRACK</span></h2>
                        <h1 className={landingStyles.title}>Buy crypto at true cost</h1>
                        <h2 className={landingStyles.sub_title}>Buy and sell 200+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</h2>
                    </div>
                    <div className={landingStyles.coin_container}>
                        {coins.map((coin)=>(
                            <div className={landingStyles.coin_wrapper}
                            key={coin.id}>
                                <div className={landingStyles.coin}>
                                    <h4 className={landingStyles.coin_name}>{coin.name}</h4>
                                    <p>{coin.symbol}</p>
                                </div>
                                <div className={landingStyles.coin_price}>${coin.price.toFixed(2)}</div>
                                <b><Percent priceChange1d={coin.priceChange1d}/></b>
                                <h4>${coin.marketCap.toFixed(2)}</h4>
                            </div>
                        )).slice(0,5)}
                    </div>
                    <Link href="/page/1">
                        <button className={landingStyles.btn}>
                            <p>Learn More</p>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Landing
