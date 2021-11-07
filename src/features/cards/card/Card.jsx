import React from "react";
import s from '../CardsPage.module.css'


export const Card = ({card, modalCard}) => {

    const {name, category, price} = card


    return (
        <div className={`${s.cardBox}`} style={modalCard ? {border: 'none'} : {}}>
            <div style={{fontSize: "16px"}}>
                {category}
            </div>
            <div style={{fontSize: "40px"}}>
                {name}
            </div>
            <div className={s.blockWithButton}>

                <div style={{fontSize: "30px"}}>
                    $
                    <div style={{fontSize: "60px", display: 'inline-block'}}>{price}</div>
                </div>
                {!modalCard && <button onClick={() => {}}>
                    buy
                </button>}
            </div>


        </div>
    )
}
