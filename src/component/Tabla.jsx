import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import shortid from 'shortid';

const Veredict = ({veredict}) => {

    if(veredict == "Jugable"){
        return(<td className={indexStyles.isPlayable} key={shortid.generate()}>{veredict}</td>)
    }else if(veredict == "Regular"){
        return(<td className={indexStyles.regular} key={shortid.generate()}>{veredict}</td>)
    }else{
        return(<td className={indexStyles.notPlayable} key={shortid.generate()}>{veredict}</td>)
    }


}

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
                                    <Veredict veredict={result.veredict} />
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