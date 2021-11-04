import React from "react";
import './App.css';
import {CardsPage} from "../component/cards/CardsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Modal} from "../component/modal/Modal";

const App = () => {


    return (

            <div className="App">
                <Routes>
                    <Route path='/' element={ <CardsPage/>}/>
                    <Route path='/cards-page' element={<CardsPage/>}/>
                    <Route path='/modal-buy' element={<Modal/>}/>

                </Routes>
            </div>

    );
}

export default App;
