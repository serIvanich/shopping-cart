import * as appSelectors from '../selectors/app-selector'
import {slice} from './application-reducer'

const appReducer = slice.reducer

const appActions = {
    ...slice.actions
}

export {
    appSelectors,
    appReducer,
    appActions,
}

