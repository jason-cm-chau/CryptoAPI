import React from 'react'

export const Percent = ({priceChange1d}) => {
    return (
        <>
            {
                (priceChange1d) > 0 ?
                <p style={{color:"green"}}>
                    {"+" + priceChange1d.toFixed(2) +"%"}
                </p>                                        
                :
                <p style={{color:"red"}}>
                    {priceChange1d.toFixed(2) +"%"}
                </p>
            }
        </>
    )
}
