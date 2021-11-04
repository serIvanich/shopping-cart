import React from "react";

export const Card = ({card}) => {

    return (
        <div>
            {card.name}
            {card.category}
            {card.price}

        </div>
    )
}
