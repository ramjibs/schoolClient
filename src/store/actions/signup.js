import * as actionTypes from './index'
import axios from '../../axios-school'


const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START,
    }
}


const signupSuccess = (data) => {

    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload: {
            msg: data.msg
        }
    }
}

const signupFail = (error) => {

    return {
        type: actionTypes.SIGNUP_FAIL,
        payload: {
            error: error
        }
    }
}

export const signup = (signup) => {
    return dispatch => {
        dispatch(signupStart())
        axios.post('registration/registerSchool', signup)
            .then(response => {
            
                dispatch(signupSuccess(response.data))
                
            })
            .catch(error => {
                 console.log(error.response.data)
                dispatch(signupFail(error.response.data.msg))
            })

    }
}