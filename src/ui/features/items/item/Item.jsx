import React from 'react'
import s from './Item.module.scss'

export const Item = React.memo(({ item, show, onShowModal, isModalItems }) => {
  const { name, category, price } = item

  const styleModal = isModalItems ? s.styleModalItems : ''

  const onButtonClick = () => {
    onShowModal(item)
  }

  return (
    <div className={`${s.itemBox} ${styleModal}`}>
      <div className={s.setCategory}>{category}</div>
      <div className={s.setTitle}>{name}</div>
      <div className={s.blockWithButton}>
        <div className={s.priceBox}>
          <span className={s.logoPrice}>$</span>
          {price}
        </div>
        {!isModalItems && (
          <button type='button' disabled={show} onClick={onButtonClick}>
            {show ? ':_:' : 'buy'}
          </button>
        )}
      </div>
    </div>
  )
})
