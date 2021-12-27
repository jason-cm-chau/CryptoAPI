import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NewsItem from '../../components/NewsItem'
import { server } from '../../config'
import newsStyles from '../../styles/News.module.css'

const News= ({ news, items =5, coin}) => {
    const [numItems, setNumItems] = useState(items);
    // const [pic, setImg] = useState({})
    // const image = new Image();

    // useEffect(() => {
    //     const image = new Image();
    //     news.map((item)=>{
    //         image.src = item.imgURL;
    //         image.onload = () =>{
    //             setImg(image)
    //         }
    //     })
    //     // image.src = news.imgURL;
    //     // image.onload = () =>{
    //     //     setImg(image)
    //     // }
    //     // console.log(img)
    // })

    return (
        <>
            <div className={newsStyles.container}>
            <div className={newsStyles.row}>
            {
                (coin)?<h2>Trending news related to {coin.name}</h2>:
                <h2>News</h2>
            }
            {(coin)?
            news.filter((n) => n.relatedCoins.includes(coin.id)).length>0?
            news.filter((n) => n.relatedCoins.includes(coin.id))
            .map((item)=>(
                <Link href={item.link}
                key={item.id}>
                    <a className={newsStyles.wrapper} target='_blank'>
                        <div className={newsStyles.content}>
                            <NewsItem item={item}/>
                        </div>
                    </a>
                </Link>)).slice(0, numItems): <>No trending news for {coin.name}</>
                :
            news.map((item)=>(
                <Link href={item.link}
                key={item.id}>
                    <a className={newsStyles.wrapper} target='_blank'>
                    <div className={newsStyles.content}>
                        <NewsItem item={item}/>
                    </div>
                    </a>
                </Link>
            )).slice(0, numItems)}
            {(numItems + items)<=(news.length) && 
            <button className={newsStyles.btn}
            onClick={()=> setNumItems(numItems+items)}>
                Load More
                
            </button>
            }
            
        </div>
        </div>
        </>
    )
}
export async function getStaticProps() {
    const res= await fetch(`${server}/api/news`)
    const data = await res.json()

    return { props: { 
        news: data.news
        }
    }   
  }
export default News
