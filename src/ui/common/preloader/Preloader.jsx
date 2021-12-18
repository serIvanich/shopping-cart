import React from 'react'
import preload from '../../../assecs/image/1486.gif'
import s from './Preloader.module.css'

export const Preloader = () => {

    return (
        <div className={s.preloaderContainer}>
            <img src={preload} alt={'preload...'}/>
        </div>)
}
