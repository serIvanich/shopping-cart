import React from "react";
import s from './Cards.module.css'
import {Navigate} from "react-router-dom";

export const Card = ({card}) => {
const {name, category, price} = card
    return (
        <div className={s.cardBox}>
            <div style={{fontSize: "16px"}}>
                {category}
            </div>
            <div style={{fontSize: "40px"}}>
                {name}
            </div>
            <div className={s.blockWithButton}>

                <div style={{fontSize: "30px"}}>
                    $<div style={{fontSize: "60px", display: 'inline-block'}}>{price}</div>
                </div>
                <button onClick={()=> <Navigate  to={'/modal-buy-cheapest'}/>}>buy</button>
            </div>


        </div>
    )
}
