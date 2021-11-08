import React, {useEffect} from "react";
import {Card} from "./card/Card";
import {useSelector} from "react-redux";

import s from './CardsPage.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {asyncActions} from "./cards-reducer";
import {useActions} from "../../utils/redux-utils";

export const CardsPage = ({onShowModal}) => {
    const {getCards} = useActions(asyncActions)
    useEffect(() => {
        getCards()
    }, [getCards])

    const cards = useSelector((state) => state.cards.cardsArr)
    const cardsViews = cards.slice(0, 6)
    const status = useSelector(state => state.app.status)

    const mapCards = cardsViews.map((c, i) => <Card key={i} card={c} onShowModal={onShowModal}/>)

    const onClickButtonCheapest = () => {
        let card = cardsViews.reduce((pr, c) => pr.price < c.price ? pr : c, {})
        onShowModal(card)
    }

    if (!cards) {
        return <Preloader/>
    }

    return (

        <div className={s.cardsPageContainer}>
            {status === 'loading' && <Preloader/>}
            <div className={s.cardsBoxContainer}>
                {mapCards}
            </div>
            <div className={s.buttonContainer} onClick={onClickButtonCheapest}>
                Buy cheapest
            </div>

        </div>


    )

}