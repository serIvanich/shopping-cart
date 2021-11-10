import {createAction} from '@reduxjs/toolkit';

const setAppStatus = createAction('app/setAppStatus')
const setAppError = createAction('app/setAppError')

export const appActions = {
    setAppStatus,
    setAppError,
}