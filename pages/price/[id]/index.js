import React from 'react'
// import { useRouter } from 'next/router'
import { Percent } from '../../../ui/Percent'
import { Price } from '../../../ui/Price'
import Link from 'next/link'
import { server } from '../../../config'
import news from '../../news'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import coinStyles from '../../../styles/Coin.module.css'

const price = ({coin, news}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <div className={coinStyles.row}>
            <div className={coinStyles.container}>
            <div className="">
                <Link href="/">All Prices</Link>
            </div>
             <div className={coinStyles.desc_wrapper}>
                <div className={coinStyles.desc}>
                <img src={coin.icon} alt="" className={coinStyles.logo}/>
                    <h2>{coin.name}</h2>
                    <p>{coin.symbol}</p>
                </div>
                <div className={coinStyles.watchlist}>
                    <FontAwesomeIcon icon={faStar}/>
                    Add to Watchlist
                </div>
            </div>
            <div className={coinStyles.info}>
                <div>
                    <div className={coinStyles.price}>
                        <h2>${coin.price.toFixed(2)}</h2>
                        <Percent priceChange1d={coin.priceChange1d}/>
                        (24H)
                    </div>
                    <div>
                        {coin.priceBtc <0.1? coin.priceBtc.toFixed(4)
                        :coin.priceBtc.toFixed(2)} BTC
                    </div>
                </div>
                <div>
                    7d price
                    ${
                        (coin.priceChange1w<0? 
                        (coin.price - Math.abs(coin.price * coin.priceChange1w)):
                        (coin.price + (coin.price * coin.priceChange1w))).toFixed(3)
                    }
                </div>
                <div>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faLink}/>
                </div>
                <div className={coinStyles.details}>
                    <div className="detail">
                        Market Cap (USD)
                        <h2>$<Price price={coin.marketCap}/></h2>
                    </div>
                    <div className="detail">
                        24H VOLUME (USD)
                        <h2>$<Price price={coin.volume}/></h2>
                    </div>
                    <div className="detail">
                        Circulating Supply
                        <h2><Price price={coin.availableSupply}/> BTC</h2>
                    </div>
                    <div className="detail">
                        Max Supply
                        <h2><Price price={coin.totalSupply}/> BTC</h2>
                    </div>
                </div>
            </div>
            <div className=''>
                <news news={news} items={3}/>
            </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    let res = await fetch(`${server}/api/coins/${context.params.id}`)
    let n = await fetch(`${server}/api/news`)

    let {news} = await n.json()
    let {coin} = await res.json()

    return {
        props: {coin, news}
    }
}



// export async function getServerSideProps(context){
//     let res = await fetch(`https://api.coinstats.app/public/v1/coins/${context.params.id}`)
    
//     let {coin} = await res.json()

//     return {
//         props: {coin}
//     }
// }

export default price