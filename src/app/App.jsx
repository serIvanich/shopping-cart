import React, {useState} from "react";
import './App.css';
import {ItemsViewContainer} from "../features/items/ItemsViewContainer";
import {ModalBuy} from "../features/modals/ModalBuy";


const App = () => {

    const [currentCard, setCurrentCard] = useState({})
    const [showModalBuy, setShowModalBuy] = useState(false)

    const onShowModal = (card) => {
        setCurrentCard(card)
        setShowModalBuy(true)
    }

    return (

        <div className="App">

            <ItemsViewContainer onShowModal={onShowModal}/>
            <ModalBuy currentCard={currentCard} show={showModalBuy} setShow={setShowModalBuy}/>
        </div>

    );
}

export default App;

