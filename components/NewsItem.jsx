import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import newsStyles from '../styles/News.module.css'

const NewsItem = ({ item }) => {
    const [pic, setPic] = useState()

    useEffect(() => {
        setPic(item)
    }, [])

    return (
        <>{
            pic ? <>
                <div className={newsStyles.thumbnail}>
                    <h2 className={newsStyles.title}>{pic.title}</h2>
                    <div className={newsStyles.img_wrapper}>
                        <div className={newsStyles.img_container}>
                        {(pic.icon.includes('/undefined')) ? <></> :
                            <div className={newsStyles.imgs}>
                                <Image loader={()=>`${pic.icon}?w=${0}`}src={pic.icon} layout='responsive'
                                width={150} height={10}
                                className={newsStyles.logo}></Image>

                                <Image loader={()=> `${pic.imgURL}?w=${0}`}src={pic.imgURL} layout='responsive' 
                                width={1000} height={350}
                                className={newsStyles.img}>
                                </Image>
                            </div>
                        }
                        </div>
                    </div>
                    </div>
                    <div className={newsStyles.details}>
                        <p className={newsStyles.source}>source: {pic.source}</p>
                        <p>{pic.description}</p>
                        <p>{
                            new Date(pic.feedDate).toDateString()
                        }</p>
                    </div>
                </> :
                    <>
                        <div className={newsStyles.thumbnail}>
                            <h2 className={newsStyles.skeleton_title}></h2>
                            <div className={newsStyles.img_wrapper}>
                                <div className={newsStyles.skeleton_img}></div>
                                <p className={newsStyles.skeleton_source}></p>
                            </div>
                        </div>
                        <div className={newsStyles.details}>
                            <p className={newsStyles.skeleton_desc}></p>
                            <p className={newsStyles.skeleton_date}></p>
                        </div>
                    </>
            }
        </>
    )
}

export default NewsItem
