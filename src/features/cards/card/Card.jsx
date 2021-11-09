import React from "react";
import s from './Card.module.css'


export const Card = ({card, onShowModal, modalCard}) => {

    const {name, category, price} = card
    const wordStyle = {
        fontSize: "16px",
        textTransform: 'uppercase',
    }
    const styleModalCard = {
        height: '180px',
        margin: '0',
        paddingTop: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',

        border: 'none',
    }
    const styleModal =  modalCard ? styleModalCard : null




    const onButtonClick = () => {
        onShowModal(card)
    }
    return (
        <div className={s.cardBox} style={styleModal ? styleModal : {}}>
            <div style={wordStyle}>
                {category}
            </div>
            <div style={{fontSize: "40px"}}>
                {name}
            </div>
            <div className={s.blockWithButton}>

                <div className={s.priceBox}><span className={s.logoPrice}>$</span>{price}</div>
                {!modalCard && <button style={wordStyle} onClick={onButtonClick}>
                    buy
                </button>}
            </div>
        </div>
    )
}
