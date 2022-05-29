import Head from 'next/head'
import Header from '../components/Header'
import Links from '../components/Links'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pi STORE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Links />
      
    </div>
  )
}
