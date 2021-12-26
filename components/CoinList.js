import React from 'react'
import { Price } from '../ui/Price'
import { Percent } from '../ui/Percent'
import coinsListStyles from '../styles/CoinList.module.css'
import Link from 'next/link'

export const CoinList = ({ coins,page }) => {
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
            {
                // className={coinsListStyles.coin_btn}
                coins.map((items) => (
                    <Link href="/price/[id]" as={`/price/${items.id}`}
                        key={items.id}>
                        <div className={coinsListStyles.coin_wrapper}>
                            <div className={coinsListStyles.coin__rank}>
                                {items.rank}
                            </div>
                            <div className={coinsListStyles.coin}>
                                <img src={items.icon} alt="" className={coinsListStyles.coin__logo} />
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
                                ${<Price price={items.volume} />}
                            </div>
                            <div>
                                ${<Price price={items.marketCap} />}
                            </div>
                        </div>
                    </Link>
                )).slice(page[0],page[1])
            }
        </div>
    )
}
