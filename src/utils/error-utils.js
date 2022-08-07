import { appActions } from '../bll/common-action/app'

export const formValidator = (
  name,
  nameValue,
  phoneNumberValue,
  formErrors,
  setFormErrors
) => {
  const changeFormErrors = (errorName, errorValue) => {
    setFormErrors((errorsObj) => ({
      ...errorsObj,
      [`${errorName}Error`]: errorValue,
    }))
  }

  if (name === 'name') {
    if (!nameValue) {
      changeFormErrors(name, 'This field in required')
    } else if (!/^[a-zA-Z]+$/i.test(nameValue)) {
      changeFormErrors(name, 'Only letters allowed')
    }
  }
  if (name === 'phoneNumber') {
    if (!phoneNumberValue) {
      changeFormErrors(name, 'This field in required')
    } else if (!/^[0-9]+$/i.test(phoneNumberValue)) {
      changeFormErrors(name, 'Only numbers allowed')
    } else if (phoneNumberValue.length !== 12) {
      changeFormErrors(name, 'Should contain 12 characters')
    }
  }
}

export const handleAsyncServerNetworkError = (
  err,
  thunkAPI,
  showError = true
) => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error: err.message ? err.message : 'Some error occurred',
      })
    )
  }

  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }))
  return thunkAPI.rejectWithValue({
    errors: [err.message],
    fieldsErrors: undefined,
  })
}
