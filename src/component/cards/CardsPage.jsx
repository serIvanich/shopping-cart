import React, {useEffect} from "react";
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {getCardsThunk} from "./cards-reducer";
import s from './Cards.module.css'
import {NavLink} from "react-router-dom";
import {Preloader} from "../../common/preloader/Preloader";

export const CardsPage = () => {
    const cards = useSelector((state) => state.cards.cardsArr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardsThunk())
    }, [dispatch])

    if (!cards) {
        return <Preloader/>
    }
const cardsComponent = cards.map((c, i) => {
    return <Card key={i} card={c}/>
})
    return (

            <div className={s.cardsPageContainer}>
                <div className={s.cardsBoxContainer}>
                    {cardsComponent.slice(0,6)}
                </div>
                <div>
                    <NavLink to={'/modal-buy'} />
                </div>

            </div>


    )

}