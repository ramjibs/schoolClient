import * as actionsTypes from '../actions'


const initialState = {
    loadingOtpRequest: false,
    error: null,
    email: null,
    msg: '',
    loadingChangePass: false,
    errorChangePass: null
    
}

export const reducerForgotPassword = (state = initialState, action) => {

    switch (action.type) {
        case actionsTypes.FORGOT_PASSWORD_START:
            return {
                ...state,
                loadingOtpRequest: true,
                error: null
            }
        case actionsTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loadingOtpRequest: false,
                error: null,
                email: action.payload.email,
                msg: action.payload.msg,
                
            }
        case actionsTypes.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                loadingOtpRequest: false,
                error: action.payload.error
            }
        case actionsTypes.CHANGE_PASSWORD_START:
            return {
                ...state,
                loadingChangePass: true,
                errorChangePass: null
            }
        case actionsTypes.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loadingChangePass: false,
                errorChangePass: null
            }
        case actionsTypes.CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                loadingChangePass: false,
                errorChangePass: action.payload.error
            }
        default:
            return state
    }


}
