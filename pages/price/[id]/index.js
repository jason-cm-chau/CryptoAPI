import React from 'react'
// import { useRouter } from 'next/router'
import { Percent } from '../../../ui/Percent'
import { CalcPrice } from '../../../ui/Price'
import Link from 'next/link'
import { server } from '../../../config'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import coinStyles from '../../../styles/Coin.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Price = ({coin}) => {
    const router = useRouter()
    const {id} = router.query
    const item = coin.coin

    item ===undefined && setTimeout(()=>router.push('/page/1'),3000)
    return (
        <div className={coinStyles.row}>
            <div className={coinStyles.container}>
            <div className="">
                <Link href="/">All Prices</Link>
            </div>
                {(item === undefined)? <>
                Cant find {id}
                </>:
                <>
                 <div className={coinStyles.desc_wrapper}>
                <div className={coinStyles.desc}>
                <Image loader={() =>item.icon}src={item.icon} layout='fixed'width={50} height={50} alt="" className={coinStyles.logo}/>
                    <h2>{item.name}</h2>
                    <p>{item.symbol}</p>
                </div>
                <div className={coinStyles.watchlist}>
                    <FontAwesomeIcon icon={faStar}/>
                    Add to Watchlist
                </div>
            </div>
            <div className={coinStyles.info}>
                <div>
                    <div className={coinStyles.price}>
                        <h2>${item.price.toFixed(2)}</h2>
                        <Percent priceChange1d={item.priceChange1d}/>
                        (24H)
                    </div>
                    <div>
                        {item.priceBtc <0.1? item.priceBtc.toFixed(4)
                        :item.priceBtc.toFixed(2)} BTC
                    </div>
                </div>
                <div className={coinStyles.socials}>
                    <FontAwesomeIcon className={coinStyles.social_icon}
                     icon={faTwitter}/>
                    <FontAwesomeIcon className={coinStyles.social_icon}
                     icon={faLink}/>
                </div>
                <div className={coinStyles.details}>
                    <div className="detail">
                        Market Cap (USD)
                        <h2>$<CalcPrice price={item.marketCap}/></h2>
                    </div>
                    <div className="detail">
                        24H VOLUME (USD)
                        <h2>$<CalcPrice price={item.volume}/></h2>
                    </div>
                    <div className="detail">
                        Circulating Supply
                        <h2><CalcPrice price={item.availableSupply}/> BTC</h2>
                    </div>
                    <div className="detail">
                        Max Supply
                        <h2><CalcPrice price={item.totalSupply}/> BTC</h2>
                    </div>
                </div>
            </div>
                </>
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    let res = await fetch(`${server}/api/coins/${context.params.id}`)
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
        else{
            return Promise.reject(response)
        }
    }).catch((err)=>console.warn('Could not find coin'))

    if(!res) return;

    return {
        props: { coin:res}
    }
}



// export async function getServerSideProps(context){
//     let res = await fetch(`https://api.coinstats.app/public/v1/coins/${context.params.id}`)
    
//     let {coin} = await res.json()

//     return {
//         props: {coin}
//     }
// }

export default Price