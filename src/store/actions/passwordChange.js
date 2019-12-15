import * as actionTypes from './index'
import axios from '../../axios-school'


const forgot_Password_Start = ()=> {
    return {
        type: actionTypes.FORGOT_PASSWORD_START,
    }
}

const forgot_Password_Success = (data)=> {
    return {
        type: actionTypes.FORGOT_PASSWORD_SUCCESS,
        payload:{
            email: data.email,
            msg: data.msg
        }
    }
}

const forgot_Password_Fail = (error)=> {
    return {
        type: actionTypes.FORGOT_PASSWORD_FAIL,
        payload:{
            error: error
        }
    }
}

export const forgot_Password = (userid)=> {

    return async dispatch => {
        dispatch(forgot_Password_Start())
        let data = {
            id: userid
        }

        function onSuccess(response){
            dispatch(forgot_Password_Success(response.data))
            return response
        }

        function onError(error){
            dispatch(forgot_Password_Fail(error.response.data.msg))
            throw error
        }
        try{
            const response = await axios.post('users/forgotPassword', data)
            return onSuccess(response)
        }
        catch (error) {
            return onError(error)
        }
            
    }
}

const change_Password_Start = ()=>{
    return {
        type: actionTypes.CHANGE_PASSWORD_START
    }
}

const change_Password_Success = () => {
    return {
        type: actionTypes.CHANGE_PASSWORD_SUCCESS,
       
    }
}

const change_Password_Fail =(error)=>{
    return {
        type: actionTypes.CHANGE_PASSWORD_FAIL,
        payload:{
            error: error
        }
    }
}

export const change_Password = (id, password, otp) => {
    return  dispatch => {
        dispatch(change_Password_Start())
        let data = {
            id: id,
            password: password,
            otp: otp
        }
        axios.post('users/changePassword', data)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                dispatch(actionTypes.loginSuccess(response.data.token))
                let msg = true
                dispatch(actionTypes.authSuccess(msg))
                dispatch(change_Password_Success())
            })
            .catch(error => {
                dispatch(change_Password_Fail(error.response.data.msg))
            })
    }
}