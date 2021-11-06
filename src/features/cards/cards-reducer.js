import {cardsApi} from "../../api/project-api";

const GET_CARDS = 'cards/GET-CARDS'

const initialState = {
    cardsArr: null
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                cardsArr:[...action.payload],
            }
        default:
            return state
    }
}

const getCards = (payload) => {
    return {type: GET_CARDS, payload}
}

export const getCardsThunk = () => async (dispatch) => {
    try {
        const data = await cardsApi.getCards()
        dispatch(getCards(data))
    } catch (e) {
        alert(e)
    }
}
