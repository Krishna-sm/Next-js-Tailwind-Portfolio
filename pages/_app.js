import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return <>
      <ThemeProvider attribute='class' enableSystem={true}>
      <NavBar/>
      <Head>
        <title>Krishna Portfolio</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Component  {...pageProps} />
      <Footer/>
      </ThemeProvider> 
  </>
}
