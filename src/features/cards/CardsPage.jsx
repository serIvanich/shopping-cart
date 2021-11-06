import React, {useEffect} from "react";
import {Card} from "./card/Card";
import {useDispatch, useSelector} from "react-redux";

import s from './CardsPage.module.css'
import {NavLink} from "react-router-dom";
import {Preloader} from "../../common/preloader/Preloader";
import {asyncActions} from "./cards-reducer";
import {useActions} from "../../utils/redux-utils";

export const CardsPage = () => {
    const {getCards} = useActions(asyncActions)
    const cards = useSelector((state) => state.cards.cardsArr)
    const status = useSelector(state => state.app.status)
    useEffect(() => {
        getCards()
    }, [])


const cardsComponent = cards.map((c, i) => {
    return <Card key={i} card={c}/>
})
    return (

            <div className={s.cardsPageContainer}>
                {(!cards || status === 'loading') && <Preloader/>}
                <div className={s.cardsBoxContainer}>
                    {cardsComponent.slice(0,6)}
                </div>
                <div className={s.navContainer}>
                    <NavLink  to={'/modal-buy'} >Buy cheapest</NavLink>
                </div>

            </div>


    )

}