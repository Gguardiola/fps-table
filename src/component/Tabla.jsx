import React from 'react';
import indexStyles from '@/styles/general.module.css'
import useSWR from 'swr';
import useApiCall from "../utils/useApiCall.js"

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (...args) => fetch(...args).then((res) => res.json());



export default function Tabla(){

    const { data, error } = useSWR('api/staticdata', fetcher, {
        revalidateOnFocus: false
      });
    console.log(data);
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    const useApiCallHandler = async () => {
        console.log("ADD");
        const res = await useApiCall("/api/addData");

    }

    return(
        <>
            <h1>Tabla de compotentes y sus FPS/rendimiento</h1>
            <table className={indexStyles.default}>
                <tbody>
                    <tr>
                        {data ? (
                            data.resultados.map((value, index) => ( 
                                <>
                                <td>{value.componentes}</td>
                                <td>{value.rendimiento}</td>
                                <td>{value.veredicto}</td>
                                </>
                            ))
                        ) : (
                            <h1>Cargando...</h1>
                        )}
                    </tr>
                </tbody>
            </table>
            <button onClick={useApiCallHandler}>ADD</button>

        </>

    )

}