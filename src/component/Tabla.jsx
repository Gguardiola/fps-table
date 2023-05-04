import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import api from '../../api'
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
                                <tr>
                                    <td>{result.username}</td>
                                    <td>{result.emulator}</td>
                                    <td>{result.components}</td>
                                    <td>{result.performance}</td>
                                    <td>{result.veredict}</td>
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