import {combineReducers} from "redux";
import {appReducer} from "../features/application/application-reducer";
import {cardsReducer} from "../features/cards/cards-reducer";


export const rootReducer = combineReducers({
    app: appReducer,
    cards: cardsReducer,
})
