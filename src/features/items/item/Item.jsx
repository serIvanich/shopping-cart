import React from 'react';
import s from './Item.module.css'

export const Item = React.memo(({item, show, onShowModal, isModalItems}) => {

    const {name, category, price} = item

    const textStyle = {
        fontSize: '16px',
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

    const styleModal = isModalItems ? styleModalItems : null

    const onButtonClick = () => {
        onShowModal(item)
    }

    return (
        <div className={s.itemBox} style={styleModal ? styleModal : {}}>
            <div style={textStyle}>
                {category}
            </div>
            <div style={{fontSize: '40px'}}>
                {name}
            </div>
            <div className={s.blockWithButton}>
                <div className={s.priceBox}><span className={s.logoPrice}>$</span>{price}</div>
                {!isModalItems && <button style={textStyle} disabled={show} onClick={onButtonClick}>
                    {show ? '(=)' : 'buy'}
                </button>}
            </div>
        </div>
    )
})
