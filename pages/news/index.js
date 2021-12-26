import Link from 'next/link'
import React, { useState } from 'react'
import { server } from '../../config'
import newsStyles from '../../styles/News.module.css'

const news= ({ news, items =5}) => {
    const [numItems, setNumItems] = useState(items);
    return (
        <div className={newsStyles.container}>
            <div className={newsStyles.row}>
            {news.map((item)=>(
                <Link href={item.link}
                key={item.id}>
                    <a className={newsStyles.wrapper} target='_blank'>
                        <div className={newsStyles.thumbnail}>
                            <h2 className={newsStyles.title}>{item.title}</h2>
                            
                            <div className={newsStyles.img_wrapper}>
                                <img src={item.imgURL}
                                className={newsStyles.img}>

                                </img>
                                {(item.icon.includes('/undefined'))? <></>:
                                <img src={item.icon}
                                className={newsStyles.logo}></img>}
                            </div>
                            source: {item.source}
                        </div>
                        <div className={newsStyles.details}>
                            <p>{item.description}</p>
                            <p>
                            {
                            new Date(item.feedDate).toDateString()
                            }
                            </p>       
                        </div>
                    </a>
                </Link>
            )).slice(0, numItems)}
            <button className={newsStyles.btn}
            onClick={()=>numItems<news.length && setNumItems(numItems+5)}>
                Load More
            </button>
        </div>
        </div>
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
export default news
