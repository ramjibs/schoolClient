import * as actionsTypes from '../actions'


const initialState = {
    autoLogin: false,
    user: null,
    error: null,
    loading: true
}

export const reducerAuth = (state = initialState, action) =>{

    switch(action.type){
        case actionsTypes.AUTH_START:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case actionsTypes.AUTH_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload,
                autoLogin: true,
                error: null
            }
        case actionsTypes.AUTH_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }

    
}
