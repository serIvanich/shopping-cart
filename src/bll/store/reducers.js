import { combineReducers } from 'redux'
import { appReducer } from '../app-reducer'
import { itemsReducer } from '../items-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
})
