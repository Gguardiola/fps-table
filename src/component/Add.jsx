import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import api from '../../api'
import { useRouter } from 'next/router';
export default function Add({modeHandler}){
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [textarea1Value, setTextarea1Value] = useState('');
    const [textarea2Value, setTextarea2Value] = useState('');
    const [selectValue, setSelectValue] = useState('Seleccione un veredicto');
    const router = useRouter();

    async function apiCall(data) {
        console.log(data);
        return await api.post("/add", data).then(function (response) {
            console.log(response.data);
            return response;
        }).catch(error => {
            console.log(error.response.data);
            return error.response;
        });
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await apiCall({
            username: input1Value,
            emulator: input2Value,
            components: textarea1Value,
            performance: textarea2Value,
            veredict: selectValue
        })
        alert(res.data.mensaje);
        modeHandler();
        router.reload();
    };

    return(
        <>
            <div className={indexStyles.divContainerForm}>
                
                <form onSubmit={handleSubmit} className={indexStyles.formBase} action="">
                    <label htmlFor="user">Usuario de Discord:</label><br />
                    <input required  maxLength={255} type="text" id="user" name="user" value={input1Value} onChange={(event) => setInput1Value(event.target.value)}  placeholder='WikiKebabs#55431'></input><br />

                    <label htmlFor="emu">Emulador</label><br />
                    <input required maxLength={800} type="text" id="emu" name="emu" value={input2Value} onChange={(event) => setInput2Value(event.target.value)}  placeholder='Ryjinux...'></input><br />

                    <label htmlFor="compo">Componentes</label><br />
                    <textarea required maxLength={800} type="text" id="compo" name="compo" value={textarea1Value} onChange={(event) => setTextarea1Value(event.target.value)}  placeholder='RTX 2060, i5-12600KF, 16GB RAM DDR4...'></textarea><br />

                    <label htmlFor="fps">Fotogramas (aproximado)</label><br />
                    <textarea required maxLength={800} type="text" id="fps" name="fps" value={textarea2Value} onChange={(event) => setTextarea2Value(event.target.value)}  placeholder='30FPS, con caidas a 20...'></textarea><br />

                    <label htmlFor="verdicto">Veredicto</label><br />
                    <select required id="verdicto" value={selectValue} onChange={(event) => setSelectValue(event.target.value)} name="Veredicto">
                        <option  value="Seleccione un veredicto" disabled>Seleccione un veredicto</option>
                        <option value="Jugable">Jugable</option>
                        <option value="Regular">Regular</option>
                        <option value="Injugable">Injugable</option>
                    </select><br />
                    
                    <input className={indexStyles.button1} type="submit"></input>
                </form>
                <p className={indexStyles.disclaimer}>NOTA: sólo puedes añadir una entrada por usuario, habla con freeman35g#5216 en el Discord si quieres añadir otra.</p>
            </div>
        </>

    )

}