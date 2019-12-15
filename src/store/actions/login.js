import * as actionTypes from './index'
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
        axios.post('users/login', data)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                dispatch(loginSuccess(response.data.token))
                let msg = true
                dispatch(actionTypes.authSuccess(msg))
            })
            .catch(error => {
                // console.log(error.response.data)
                dispatch(loginFail(error.response.data))
            })

    }
}