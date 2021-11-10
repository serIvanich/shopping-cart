import React, {useState} from "react";
import './App.css';
import {ItemsViewContainer} from "../features/items/ItemsViewContainer";
import {ModalBuy} from "../features/modals/ModalBuy";
import {useSelector} from "react-redux";
import {ErrorSnackbar} from "../common/error-snackbar/ErrorSnackbar";


const App = () => {
const appError = useSelector(state => state.app.error)
    const [currentItem, setCurrentItem] = useState({})
    const [showModalBuy, setShowModalBuy] = useState(false)

    const onShowModal = (item) => {
        setCurrentItem(item)
        setShowModalBuy(true)

    }

    return (

        <div className="App">

            <ItemsViewContainer show={showModalBuy} onShowModal={onShowModal}/>
            <ModalBuy currentItem={currentItem} show={showModalBuy} setShow={setShowModalBuy}/>
            { appError && <ErrorSnackbar error={appError} />}
        </div>

    );
}

export default App;

