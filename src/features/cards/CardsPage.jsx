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
    }, [])

    const cards = useSelector((state) => state.cards.cardsArr)
    const status = useSelector(state => state.app.status)

    if (!cards) {
        return <Preloader/>
    }
    const mapCards = cards.map((c, i) => <Card key={i} card={c}/>)
    return (

        <div className={s.cardsPageContainer}>
            {(!cards || status === 'loading') && <Preloader/>}
            <div className={s.cardsBoxContainer}>
                {mapCards.slice(0, 6)}
            </div>
            <div className={s.navContainer} onClick={() => onShowModal(cards[0])}>
                <p>Buy cheapest</p>
                {/*<NavLink  to={'/modals-buy'} ></NavLink>*/}
            </div>

        </div>


    )

}