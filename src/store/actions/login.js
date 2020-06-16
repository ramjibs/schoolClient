import * as actionTypes from './index'
import * as api from '../../api'
import axios from '../../axios-school'

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    }
}


export const loginSuccess = (token) => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            token: token
        }
    }
}

const loginFail = (error) => {

    return {
        type: actionTypes.LOGIN_FAIL,
        payload: {
            error: error
        }
    }
}

export const login = (userid, password) => {
    return dispatch => {
        dispatch(loginStart())
        let data = {
            id: userid,
            password: password
        }
        axios.post(api.USER_LOGIN, data)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                dispatch(loginSuccess(response.data.token))
                dispatch(actionTypes.authSuccess(response.data.user))
            })
            .catch(error => {
                // console.log(error.response.data)
                dispatch(loginFail(error.response.data))
            })

    }
}