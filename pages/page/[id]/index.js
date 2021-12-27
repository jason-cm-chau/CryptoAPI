import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { CoinList } from '../../../components/CoinList'
import { Mover } from '../../../components/Mover';
import { server } from '../../../config'
import pageStyles from '../../../styles/Page.module.css'

const page = ({ data }) => {
    let coins = data.coins;
    // let pageCounter = [0,10];
    const [page, setPage] = useState([0, 10]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        setPage([page[1] * (id - 1), page[1] * id])
    }, [])

    function colorBtn(btn){
        return (btn.key === id) || (!id && btn.key==1)? 
        <button style={{backgroundColor:"#1199FA"
        ,color:"#fff"}}
        className={pageStyles.btn}
        onClick={() => setPage([item.rank - 10, item.rank])}>
            {btn.key}</button>:
        btn
    }
    return (
        <div className={pageStyles.content}>
            <Mover movers={coins} />
            {id <= coins.length/10 ?
                <CoinList coins={coins} page={page}></CoinList>
                :
                <p className={pageStyles.error}>No results</p>
            }
            <div className={pageStyles.row}>
                <div className={pageStyles.btn_wrapper}>
                    <div className={pageStyles.btn_container}>
                        <button className={pageStyles.btn}
                            onClick={() => {
                                if ((id - 1) > 0) {
                                    setPage([page[0] - 10, page[1] - 10])
                                }
                                return
                            }}>
                            <Link href="/page/[id]" as={id - 1 > 0 ?
                                `/page/${(+id) - 1}` :
                                `/page/${id}`}>
                                back
                            </Link>
                        </button>
                        {
                            coins.map((item) =>
                                (item.rank % 10) === 0 &&
                                (
                                    colorBtn(<button className={pageStyles.btn}
                                        key={item.rank/10}
                                        onClick={() => setPage([item.rank - 10, item.rank])}>
                                        <Link href="/page/[id]" as={`/page/${item.rank / 10}`}>
                                            <a>{item.rank / 10}</a>
                                        </Link>
                                    </button>)
                                )
                            )
                        }
                        <button className={pageStyles.btn}
                            onClick={() => {
                                if ((id) < (coins.length / 10)) {
                                    setPage([page[0] + 10, page[1] + 10])
                                }
                                return
                            }}>
                            <Link href="/page/[id]" as={id < (coins.length / 10) ?
                                `/page/${(+id) + 1}` :
                                `/page/${id}`}>
                                forward
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let res = await fetch(`${server}/api/coins/`)
    let data = await res.json()

    return { props: { data } }
}

export default page