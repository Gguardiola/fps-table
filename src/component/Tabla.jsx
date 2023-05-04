import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import api from '../../api'
import shortid from 'shortid';
export default function Tabla(){
    const [db, setDb] = useState('');
    useEffect(() => {
        async function fetchData() {
          const response = await api.get('/db');
          setDb(response.data);
        }
        fetchData();
    }, []);
    
    console.log(db.data)

    return(
        <>
            <h1>Tabla de compotentes y sus FPS/rendimiento</h1>
            <table className={indexStyles.default}>
                <tbody>
                    
                         {db ? (
                            db.data.map((result) => ( 
                                <tr key={shortid.generate()}>
                                    <td key={shortid.generate()}>{result.username}</td>
                                    <td key={shortid.generate()}>{result.emulator}</td>
                                    <td key={shortid.generate()}>{result.components}</td>
                                    <td key={shortid.generate()}>{result.performance}</td>
                                    <td key={shortid.generate()}>{result.veredict}</td>
                                </tr>
                            ))
                        ) : (
                            <tr><td>Cargando...</td></tr>
                        )}
       
                </tbody>
            </table>


        </>

    )

}