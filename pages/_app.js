import Layout from '../components/Layout'
import '../styles/globals.css'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faTwitter} from '@fortawesome/free-brands-svg-icons'

// library.add(faTwitter)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
