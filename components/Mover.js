import React from 'react'
import { Percent } from '../ui/Percent'
import { Price } from '../ui/Price'
import moverStyles from '../styles/Mover.module.css'
import Link from 'next/link'
import MoverItem from './MoverItem'

export const Mover = ({ movers }) => {
    const coins = movers.slice()
    return (
        <div className={moverStyles.row}>
            <h2 className={moverStyles.title}>Top Movers</h2>
            <div className={moverStyles.mover_container}>
                {
                    coins.sort((a,b)=> b.priceChange1d- a.priceChange1d)
                    .slice(0, 5) 
                    .map((item) => (
                        <Link href="/price/[id]" as={`/price/${item.id}`}
                        key={item.id}>
                            <a>
                                <MoverItem item={item}/>
                            </a>
                        </Link>
                    ))
                }
                {
                    coins.sort((a,b)=> a.priceChange1d- b.priceChange1d)
                    .slice(0, 5) 
                    .map((item) => (
                        <Link href="/price/[id]" as={`/price/${item.id}`}
                        key={item.id}>
                            <a>
                                <MoverItem item={item}/>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
