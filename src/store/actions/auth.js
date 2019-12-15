import * as actionTypes from './index'
import axios from '../../axios-school'

const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (msg) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            msg: msg
        }
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
        axios.get('/checktoken')
            .then(response => {
                dispatch(actionTypes.loginSuccess(token))
                dispatch(authSuccess(response.data.msg))
            })  
            .catch((error) => {
                dispatch(authFail(error.response.data))
            })

    }
}