import React, {useState} from "react";
import './App.css';
import {CardsPage} from "../features/cards/CardsPage";
import {ModalBuy} from "../features/modals/ModalBuy";
import {useActions} from "../utils/redux-utils";
import {asyncActions} from "../features/cards/cards-reducer";

const App = () => {
    const {getCards} = useActions(asyncActions)
    const [currentCard, setCurrentCard] = useState({})
    const [showModalBuy, setShowModalBuy] = useState(false)
    const [showModalBuyCheapest, setShowModalBuyCheapest] = useState(false)



    const onShowModal = (card) => {
        setCurrentCard(card)
        setShowModalBuy(true)

    }


    return (

        <div className="App">


            <CardsPage onShowModal={onShowModal} setCurrentCard={setCurrentCard}/>
            <ModalBuy currentCard={currentCard} show={showModalBuy} setShow={setShowModalBuy}/>
        </div>

    );
}

export default App;


{/*<Routes>*/
}
{/*    <Route path='/' element={ <CardsPage/>}/>*/
}
{/*    <Route path='/modals-buy-cheapest' element={<ModalBuyCheapest/>}/>*/
}
{/*    <Route path='/modals-buy' element={<ModalBuy/>}/>*/
}

{/*</Routes>*/
}