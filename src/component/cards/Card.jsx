import React from "react";
import s from './Cards.module.css'

export const Card = ({card}) => {

    return (
        <div className={s.cardBox}>
            {card.name}
            {card.category}
            {card.price}

        </div>
    )
}
