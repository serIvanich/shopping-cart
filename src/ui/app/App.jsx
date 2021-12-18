import React, {useState} from 'react';
import {ItemsViewContainer} from '../features/items/ItemsViewContainer';
import {ModalBuy} from '../features/modals/ModalBuy';
import {useSelector} from 'react-redux';
import {ErrorSnackbar} from '../common/error-snackbar/ErrorSnackbar';
import {appSelectors} from '../../bll/app-reducer';

const App = () => {
    const appError = useSelector(appSelectors.selectorError)

    const [currentItem, setCurrentItem] = useState({})
    const [showModalBuy, setShowModalBuy] = useState(false)

    const onShowModal = (item) => {
        setCurrentItem(item)
        setShowModalBuy(true)
    }

    return (
        <div>
            <ItemsViewContainer show={showModalBuy} onShowModal={onShowModal}/>
            <ModalBuy currentItem={currentItem} show={showModalBuy} setShow={setShowModalBuy}/>
            {appError && <ErrorSnackbar error={appError}/>}
        </div>

    );
}

export default App;

