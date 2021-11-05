import React from "react";
import './App.css';
import {CardsPage} from "../component/cards/CardsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ModalBuy} from "../component/modal/ModalBuy";
import {ModalBuyCheapest} from "../component/modal/ModalBuyCheapest";

const App = () => {


    return (

            <div className="App">
                <Routes>
                    <Route path='/' element={ <CardsPage/>}/>
                    <Route path='/modal-buy-cheapest' element={<ModalBuyCheapest/>}/>
                    <Route path='/modal-buy' element={<ModalBuy/>}/>

                </Routes>
            </div>

    );
}

export default App;
