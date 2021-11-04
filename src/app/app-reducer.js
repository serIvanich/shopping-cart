

const initialState = {
    status: 'succeeded',
    error: null ,
}



export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

// export const getCardsThunk = () => async (dispatch) => {
//     try {
//
//         const data = await projectApi.getCards()
//         console.log(data)
//
//     } catch (e) {
//         alert(e)
//     }
// }
