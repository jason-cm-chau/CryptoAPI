import React from 'react'
import newsStyles from '../styles/News.module.css'

const NewsItem = ({item}) => {
    return (
        <>
            <div className={newsStyles.thumbnail}>
                <h2 className={newsStyles.title}>{item.title}</h2>
                    <div className={newsStyles.img_wrapper}>
                        <img src={item.imgURL}
                        className={newsStyles.img}>
                        </img>
                        {(item.icon.includes('/undefined'))? <></>:
                            <img src={item.icon}
                            className={newsStyles.logo}></img>}
                            <p className={newsStyles.source}>source: {item.source}</p>
                    </div>
            </div>
            <div className={newsStyles.details}>
                <p>{item.description}</p>
                <p>{
                    new Date(item.feedDate).toDateString()
                }</p>       
            </div>   
        </>
    )   
}

export default NewsItem
