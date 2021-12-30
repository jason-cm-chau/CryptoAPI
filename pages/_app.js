import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import staticImg from '../assets/Capture.PNG'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faTwitter} from '@fortawesome/free-brands-svg-icons'

// library.add(faTwitter)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crypto App</title>
        <meta name='description' content='#1 App for everything Crypto'></meta>
        <meta property='og:image' content="/assets/Capture.PNG"></meta>
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
