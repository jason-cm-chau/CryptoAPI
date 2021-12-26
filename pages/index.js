import Head from 'next/head'
import { CoinList } from '../components/CoinList';
import { Mover } from '../components/Mover';
import News from './news';
import { server } from '../config';

export default function Home({ news, coins }) {
  // "https://api.coinstats.app/public/v1/coins?skip=0"
  // https://api.coinstats.app/public/v1/coins?skip=0&limit=10
  // let coins = data.coins;
  return (
    <>
    <Mover movers={coins}/>
    <CoinList coins={coins} page={[0,10]}/>
    {/* <News news={news}/> */}
    </>
  )
}



export async function getStaticProps() {
  const res_news = await fetch(`${server}/api/news`)
  const res_coins = await fetch(`${server}/api/coins`)

  const data_news = await res_news.json()
  const data_coins = await res_coins.json()

  return { props: { 
    news: data_news.news,
    coins: data_coins.coins
  },revalidate:1 }
}

// export async function getStaticProps() {
//   let res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
//   let data = await res.json()

//   return { props: { data:coins } }
// }