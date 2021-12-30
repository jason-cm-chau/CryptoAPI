import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import moverStyles from '../styles/Mover.module.css'
import { Percent } from '../ui/Percent'
import { CalcPrice } from '../ui/Price'

const MoverItem = ({item}) => {
    const [pic, setPic] = useState()

    useEffect(()=>{
        setPic(item.icon)
    },[])
    return (
        <div className={moverStyles.mover_wrapper} >
            {
                pic?<>
                <div className={moverStyles.coin__details}>
                <Image loader={()=>`${pic}?w=${50}`} src={item.icon} layout='fixed' 
                width={50} height={50}
                alt="" className={moverStyles.mover__logo} />
                <div className={moverStyles.mover__desc}>
                    <p>{item.name}</p>
                    <p>{item.symbol}</p>
                </div>
                <div className={moverStyles.mover__price}>
                    ${<CalcPrice price={item.price} />}
                </div>
            </div>
            <div className={moverStyles.mover__change}>
                {
                    <Percent priceChange1d={item.priceChange1d} />
                }
            </div>
                </> : <>
                <div className={moverStyles.coin__details}>
                <div className={moverStyles.skeleton__logo} />
                <div className={moverStyles.mover__desc}>
                    <p className={moverStyles.skeleton_name}></p>
                    <p className={moverStyles.skeleton_symbol}></p>
                </div>
                <div className={moverStyles.skeleton__price}></div>
                </div>
                <div className={moverStyles.skeleton_percent}></div>
                </>
            }
        </div>
    )
}

export default MoverItem
