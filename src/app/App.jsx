import React, {useState} from "react";
import './App.css';
import {ItemsViewContainer} from "../features/items/ItemsViewContainer";
import {ModalBuy} from "../features/modals/ModalBuy";
import {useSelector} from "react-redux";
import {ErrorSnackbar} from "../common/error-snackbar/ErrorSnackbar";


const App = () => {
const appError = useSelector(state => state.app.error)
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
            { appError && <ErrorSnackbar error={appError} />}
        </div>

    );
}

export default App;

