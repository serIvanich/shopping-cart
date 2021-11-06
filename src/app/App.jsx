import React, {useState} from "react";
import './App.css';
import {CardsPage} from "../features/cards/CardsPage";

const App = () => {
 const [showModalBuy, setShowModalBuy] = useState(false)
 const [showModalBuyCheapest, setShowModalBuyCheapest] = useState(false)

    return (

        <div className="App">

            <CardsPage/>
        </div>

    );
}

export default App;


{/*<Routes>*/}
{/*    <Route path='/' element={ <CardsPage/>}/>*/}
{/*    <Route path='/modal-buy-cheapest' element={<ModalBuyCheapest/>}/>*/}
{/*    <Route path='/modal-buy' element={<ModalBuy/>}/>*/}

{/*</Routes>*/}