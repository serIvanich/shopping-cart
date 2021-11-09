import React from "react";
import s from './Item.module.css'


export const Item = ({item, onShowModal, isModalItems}) => {

    const {name, category, price} = item
    const wordStyle = {
        fontSize: "16px",
        textTransform: 'uppercase',
    }
    const styleModalItems = {
        height: '180px',
        margin: '0',
        paddingTop: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none',
    }
    const styleModal =  isModalItems ? styleModalItems : null

    const onButtonClick = () => {
        onShowModal(item)
    }
    return (
        <div className={s.itemBox} style={styleModal ? styleModal : {}}>
            <div style={wordStyle}>
                {category}
            </div>
            <div style={{fontSize: "40px"}}>
                {name}
            </div>
            <div className={s.blockWithButton}>
                <div className={s.priceBox}><span className={s.logoPrice}>$</span>{price}</div>
                {!isModalItems && <button style={wordStyle} onClick={onButtonClick}>
                    buy
                </button>}
            </div>
        </div>
    )
}
