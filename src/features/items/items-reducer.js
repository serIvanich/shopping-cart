import {itemsApi} from "../../api/project-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appActions} from "../common-action/app";


const getItems = createAsyncThunk('items/getItems',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(appActions.setAppStatus({status: 'loading'}))
        try {
            const data = await itemsApi.getItems()
            thunkAPI.dispatch(appActions.setAppStatus({status: 'success'}))
            return data
        } catch (e) {
            return alert(e)
        }
    })

export const asyncActions = {
    getItems: getItems,
}

const slice = createSlice({
    name: 'items',
    initialState: {
        itemsArray: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getItems.fulfilled,
            (state, action) => {
                state.itemsArray.push(...action.payload)
            }
        )
    }
})

export default slice.reducer

