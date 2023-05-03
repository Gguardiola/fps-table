import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import indexStyles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rendimiento TOTK</title>
        <meta name="description" content="TOTK Rendimiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className={indexStyles.mainContainer}>
        <h1>Tabla de compotentes y sus FPS/rendimiento</h1>
        <table className={indexStyles.default}>
            <tr>
            <td className={indexStyles.td}>Ryzen 7 5700x - RTX2060 - 32GB RAM</td>
            <td className={indexStyles.td}>30FPS estables con bajones</td>
            <td className={indexStyles.isPlayable}>Jugable</td>
            </tr>
        
            <tr>    
            <td className={indexStyles.td}>I5 9600K - RTX2060 - 16GB</td>
            <td className={indexStyles.td}>20 FPS estables sin bajones</td>
            <td className={indexStyles.isPlayable} >Injugable</td>
            </tr>
        </table>
      </div>
      </main>
    </>
  )
}
