import React,{useEffect, useState} from 'react';
import indexStyles from '@/styles/general.module.css'
import api from '../../api'

export default function Add(){

    

    return(
        <>
            <div className={indexStyles.divContainerForm}>
                <form className={indexStyles.formBase} action="">
                    <label for="user">Usuario de discord:</label><br />
                    <input required  maxlength="255" type="text" id="user" name="user" placeholder='WikiKebabs#55431'></input><br />

                    <label for="emu">Emulador</label><br />
                    <input required maxlength="800" type="text" id="emu" name="emu" placeholder='Ryjinux...'></input><br />

                    <label for="compo">Componentes</label><br />
                    <textarea required maxlength="800" type="text" id="compo" name="compo" placeholder='RTX 2060, i5-12600KF, 16GB RAM DDR4...'></textarea><br />

                    <label for="fps">Fotogramas (aproximado)</label><br />
                    <textarea required maxlength="800" type="text" id="fps" name="fps" placeholder='30FPS, con caidas a 20...'></textarea><br />

                    <label for="verdicto">Veredicto</label><br />
                    <select required id="verdicto" name="Veredicto">
                        <option value="jugable">Jugable</option>
                        <option value="Regular">Regular</option>
                        <option value="Injugable">Injugable</option>
                    </select><br />

                    <input className={indexStyles.button1} type="submit"></input>
                </form>
            </div>
        </>

    )

}