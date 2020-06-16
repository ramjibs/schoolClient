import * as actionTypes from './index'
import * as api from '../../api'
import axios from '../../axios-school'

const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: data
    }
}

const authFail = (error) => {

    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error: error
        }
    }
}

export const auth = (token) => {
    return dispatch => {
        dispatch(authStart())
        axios.defaults.headers.common['Authorization'] = token
        axios.get(api.CHECKTOKEN_VALIDITY)
            .then(response => {
                dispatch(actionTypes.loginSuccess(token))
                dispatch(authSuccess(response.data))
            })  
            .catch((error) => {
                error.response ? dispatch(authFail(error.response.data)) : dispatch(authFail(error.message))
                
            })

    }
}