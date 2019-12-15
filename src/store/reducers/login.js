import * as actionsTypes from '../actions'


const initialState = {
    loading: false,
    error: null,
    token: null
}

export const reducerLogin = (state = initialState, action) =>{

    switch(action.type){
        case actionsTypes.LOGIN_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case actionsTypes.LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                token: action.payload.token
            }
        case actionsTypes.LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }

    
}
