import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import indexStyles from '@/styles/general.module.css'
import Tabla from '../component/Tabla'
import {useState, useEffect} from 'react';
import Add from '../component/Add'
import api from '../../api'


const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  const [mode,setMode] = useState({modo: "table",prompt:"Añadir mi rendimiento"})

  const addHandler = () => {
    if (mode.modo == "add"){
      
      setMode({modo: "table",prompt:"Añadir mi rendimiento"});
      console.log(mode)

    } else{
      setMode({modo: "add",prompt:"Volver"});
      console.log(mode)
    }
  }

  const [db, setDb] = useState('');
  useEffect(() => {
      async function fetchData() {
        const response = await api.get('/db');
        setDb(response.data);
      }
      fetchData();
  }, []);
  
  console.log(db.data)
  return (
    <>
      <Head>
        <title>Rendimiento TOTK</title>
        <meta name="description" content="TOTK Rendimiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className={roboto.className}>
        <h1>Rendimiento Zelda: TOTK</h1>
        <div className={indexStyles.buttonContainer}>
            <button onClick={addHandler} className={indexStyles.button1}>{mode.prompt}</button>
        </div>
        {mode.modo == "add" ?
          <>
            <Add></Add>
          </>
          :
          <>
            <Tabla db={db}></Tabla>         
          </>
        }

      </main>
    </>
  )
}
