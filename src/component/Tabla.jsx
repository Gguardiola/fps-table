import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import shortid from 'shortid';
export default function Tabla({db}){


    return(
        <>

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