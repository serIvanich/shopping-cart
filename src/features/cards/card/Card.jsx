import React from "react";
import s from './Card.module.css'


export const Card = ({card, onShowModal, modalCard}) => {

    const {name, category, price} = card

const onButtonClick = () => {

    onShowModal(card)

}
    return (
        <div className={`${s.cardBox}`} style={modalCard ? {border: 'none'} : {}}>
            <div style={{fontSize: "16px"}}>
                {category}
            </div>
            <div style={{fontSize: "40px"}}>
                {name}
            </div>
            <div className={s.blockWithButton}>


                    <div >$</div>
                    <div style={{fontSize: "60px"}}>{price}</div>

                {!modalCard && <button onClick={onButtonClick}>
                    buy
                </button>}
            </div>


        </div>
    )
}
