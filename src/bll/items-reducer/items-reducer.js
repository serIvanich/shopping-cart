import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { itemsApi } from '../../api/project-api'
import { appActions } from '../common-action/app'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'

const getItems = createAsyncThunk('items/getItems', async (param, thunkAPI) => {
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'loading' }))
  try {
    const data = await itemsApi.getItems()
    thunkAPI.dispatch(appActions.setAppStatus({ status: 'success' }))
    return data
  } catch (e) {
    return handleAsyncServerNetworkError(e, thunkAPI)
  }
})

export const asyncActions = {
  getItems,
}

export const slice = createSlice({
  name: 'items',
  initialState: {
    itemsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.itemsArray.push(...action.payload)
    })
  },
})
