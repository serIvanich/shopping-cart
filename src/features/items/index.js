import * as itemsSelectors from './selectors'
import {slice, asyncActions} from './items-reducer'

const itemsReducer = slice.reducer

const itemsActions = {
    ...asyncActions,
    ...slice.actions
}

export {
    itemsSelectors,
    itemsReducer,
    itemsActions,
}

