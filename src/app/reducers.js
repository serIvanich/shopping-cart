import {combineReducers} from "redux";
import appReducer from "../features/application/application-reducer";
import itemsReducer from "../features/items/items-reducer";

export const rootReducer = combineReducers({
    app: appReducer,
    items: itemsReducer,
})
