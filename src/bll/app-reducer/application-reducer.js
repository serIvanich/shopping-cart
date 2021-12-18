import {createSlice} from '@reduxjs/toolkit';
import {appActions} from '../common-action/app';

export const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(appActions.setAppStatus, (state, action) => {
                state.status = action.payload.status
            })
            .addCase(appActions.setAppError, (state, action) => {
                state.error = action.payload.error
            })
    }
})
