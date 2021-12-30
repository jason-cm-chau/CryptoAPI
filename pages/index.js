import Landing from '../components/Landing';

export default function Home({ coins }) {
  // "https://api.coinstats.app/public/v1/coins?skip=0"
  // https://api.coinstats.app/public/v1/coins?skip=0&limit=10
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
  // let res = await fetch(`${server}/api/coins`)
  let res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0')

  let data = await res.json()

  return { props: { coins: data.coins } }
}