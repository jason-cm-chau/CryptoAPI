import Head from 'next/head'
import { CoinList } from '../components/CoinList';
import { Mover } from '../components/Mover';
import News from './news';
import { server } from '../config';
import Landing from './Landing';

export default function Home({ coins }) {
  // "https://api.coinstats.app/public/v1/coins?skip=0"
  // https://api.coinstats.app/public/v1/coins?skip=0&limit=10
  // let coins = data.coins;
  return (
    <>
      <Landing coins={coins}/>
    </>
  )
}



// export async function getStaticProps() {
//   const res_news = await fetch(`${server}/api/news`)
//   const res_coins = await fetch(`${server}/api/coins`)

//   const data_news = await res_news.json()
//   const data_coins = await res_coins.json()

//   return { props: { 
//     news: data_news.news,
//     coins: data_coins.coins
//   },revalidate:1 }
// }

export async function getStaticProps() {
  let res = await fetch(`${server}/api/coins`)
  let data = await res.json()

  return { props: { coins: data.coins } }
}