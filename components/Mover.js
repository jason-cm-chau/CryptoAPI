import React from 'react'
import { Percent } from '../ui/Percent'
import { Price } from '../ui/Price'
import moverStyles from '../styles/Mover.module.css'
import Link from 'next/link'

export const Mover = ({ movers }) => {
    return (
        <div className={moverStyles.row}>
            <h2 className={moverStyles.title}>Top Movers</h2>
            <div className={moverStyles.mover_container}>
                {
                    movers.map((item) => (
                        <Link href="/price/[id]" as={`/price/${item.id}`}>
                            <a>
                            <div className={moverStyles.mover_wrapper} key={item.id}>
                            <div className={moverStyles.coin__details}>
                                <img src={item.icon} alt="" className={moverStyles.mover__logo} />
                                <div className={moverStyles.mover__desc}>
                                    <p>{item.name}</p>
                                    <p>{item.symbol}</p>
                                </div>
                                <div className={moverStyles.mover__price}>
                                    ${<Price price={item.price} />}
                                </div>
                            </div>
                            <div className={moverStyles.mover__change}>
                                {
                                    <Percent priceChange1d={item.priceChange1d} />
                                }
                            </div>
                            </div>
                            </a>
                        </Link>
                    )).slice(0, 5)
                }
                {
                    movers.map((item) => (
                        <div className={moverStyles.mover_wrapper} key={item.id}>
                            <div className={moverStyles.coin__details}>
                                <img src={item.icon} alt="" className={moverStyles.mover__logo} />
                                <div className={moverStyles.mover__desc}>
                                    <p>{item.name}</p>
                                    <p>{item.symbol}</p>
                                </div>
                                <div className={moverStyles.mover__price}>
                                    ${<Price price={item.price} />}
                                </div>
                            </div>
                            <div className={moverStyles.mover__change}>
                                {
                                    <Percent priceChange1d={item.priceChange1d} />
                                }
                            </div>
                        </div>
                    )
                    ).slice(5, 10)
                }
            </div>
        </div>
    )
}
