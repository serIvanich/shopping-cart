import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getCardsThunk} from "../component/cards/cards-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {Card} from "../component/cards/Card";

function App() {


    const cards = useSelector((state) => state.cards.cardsArr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardsThunk())
    }, [dispatch])

    if (!cards) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {cards.map((c, i) => {
                    return <Card key={i} card={c}/>
                })}
            </div>

        </div>
    )


}

export default App;
