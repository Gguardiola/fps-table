import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import indexStyles from '@/styles/general.module.css'
import Layout from '../component/Layout'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {


  return (
    <>
      <Head>
        <title>Rendimiento TOTK</title>
        <meta name="description" content="TOTK Rendimiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className={roboto.className}>
        <Layout></Layout>
      </main>
    </>
  )
}
