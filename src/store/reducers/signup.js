import * as actionsTypes from '../actions'


const initialState = {
    loading: false,
    error: null,
    signupSuccess: false
}

export const reducerSignup = (state = initialState, action) =>{

    switch(action.type){
        case actionsTypes.SIGNUP_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case actionsTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                signupSuccess: true
            }
        case actionsTypes.SIGNUP_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                singupSuccess: false
            }
        default:
            return state
    }

    
}
