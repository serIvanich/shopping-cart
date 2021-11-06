import {cardsApi} from "../../api/project-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appActions} from "../common-action/app";


const getCards = createAsyncThunk('cards/getCards',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(appActions.setAppStatus({status: 'loading'}))
        try {
            const data = await cardsApi.getCards()
            thunkAPI.dispatch(appActions.setAppStatus({status: 'success'}))
            return data
        } catch (e) {
            return alert(e)
        }
    })


export const asyncActions = {
    getCards: getCards,
}
const slice = createSlice({
    name: 'cards',
    initialState: {
        cardsArr: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCards.fulfilled,
            (state, action) => {

                state.cardsArr.push(...action.payload)
            }
        )
    }
})

export default slice.reducer

