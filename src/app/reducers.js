import {combineReducers} from 'redux';
import {appReducer} from '../features/application';
import {itemsReducer} from '../features/items';

export const rootReducer = combineReducers({
    app: appReducer,
    items: itemsReducer,
})
