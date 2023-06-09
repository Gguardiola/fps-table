import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import indexStyles from '@/styles/general.module.css'
import Tabla from '../component/Tabla'
import {useState, useEffect} from 'react';
import Add from '../component/Add'
import api from '../../api'
import { useRouter } from 'next/router'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  const [mode,setMode] = useState({modo: "table",prompt:"Añadir mi rendimiento"})
  const router = useRouter();

  function setModeHandler(){
    setMode({modo: "table",prompt:"Añadir mi rendimiento"})
  }

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
            <Add modeHandler={setModeHandler}></Add>
          </>
          :
          <>
            <Tabla db={db}></Tabla>         
          </>
        }
      <footer><p>Creado por <a target="_blank" href="https://twitter.com/_freeman35g">@_freeman35g</a> y <a target="_blank" href="https://twitter.com/Cussyxd">@Cussyxd</a>. Dudas en el <a target="_blank" href="https://discord.gg/zuAJvvze8m">Discord!</a> </p></footer>
      </main>
    </>
  )
}
