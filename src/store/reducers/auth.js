import * as actionsTypes from '../actions'


const initialState = {
    autoLogin: false,
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
                autoLogin: action.payload.msg,
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
