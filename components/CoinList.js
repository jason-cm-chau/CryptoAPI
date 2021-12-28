import React, { useEffect, useState } from 'react'
import { CalcPrice } from '../ui/Price'
import { Percent } from '../ui/Percent'
import coinsListStyles from '../styles/CoinList.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const CoinList = ({ coins,page }) => {
    const [pic, setPic] = useState([])
    
    useEffect(()=>{
        setPic(coins.filter(c=> c.icon))
    },[])
    
    return (
        <div className={coinsListStyles.row}>
            <div className={coinsListStyles.tags}>
                <p className={coinsListStyles.rating}>#</p>
                <p>Name</p>
                <p>Price</p>
                <p>24H Change</p>
                <p>24H Volume</p>
                <p>Market Cap</p>
            </div>
            {/* {console.log(pic.length)} */}
            <div className={coinsListStyles.wrapper}>
            {
                pic.length!==0? 
                (pic.map((items) => {
                    return <Link href="/price/[id]" as={`/price/${items.id}`}
                        key={items.name}>
                        <div className={coinsListStyles.coin_wrapper}>
                            <div className={coinsListStyles.coin__rank}>
                                {items.rank}
                            </div>
                            <div className={coinsListStyles.coin}>
                                <Image loader={()=>items.icon} src={items.icon} alt="" layout='fixed' width={40} height={30} className={coinsListStyles.coin__logo} />
                                <div className={coinsListStyles.coin__desc}>
                                    <p>{items.name}</p>
                                    <p>{items.symbol}</p>
                                </div>
                            </div>
                            <div className={coinsListStyles.coin__price}>
                                ${items.price.toFixed(2)}
                            </div>
                            <div>
                            {
                                <Percent priceChange1d={items.priceChange1d} />
                            }
                            </div>
                            <div >
                                ${<CalcPrice price={items.volume} />}
                            </div>
                            <div>
                                ${<CalcPrice price={items.marketCap} />}
                            </div> 
                            </div>
                            </Link>}).slice(page[0],page[1]))
                            :
                            (
                                coins.map((item)=>(
                                    <div className={coinsListStyles.coin_wrapper} key={item.id}>
                                    <div className={coinsListStyles.skeleton__rank}></div>
                                    <div className={coinsListStyles.coin}>
                                    <div className={coinsListStyles.skeleton_icon}></div>
                                        <div className={coinsListStyles.coin__desc}>
                                            <p className={coinsListStyles.skeleton_name}></p>
                                            <p className={coinsListStyles.skeleton_symbol}></p>
                                        </div>
                                    </div>
                                    <div className={coinsListStyles.skeleton__price}></div>
                                    <div className={coinsListStyles.skeleton_percent}></div>
                                    <div className={coinsListStyles.skeleton_volume}></div>
                                    <div className={coinsListStyles.skeleton_marketCap}></div>          
                                </div>
                                )).slice(0,10)
                            )}
        </div>
    </div>
)}
