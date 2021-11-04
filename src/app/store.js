import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux"
import {appReducer} from "./app-reducer";
import {cardsReducer} from "../component/cards/cards-reducer";

const reducers = combineReducers({
    app: appReducer,
    cards: cardsReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk));


window.store = store;