import * as actionTypes from './ActionTypes'
import * as api from '../../api'
import axios from '../../axios-school'

const addTeacherStart = () =>{
    return {
        type: actionTypes.ADD_TEACHER_START
    }


}

const addTeacherSuccess = (data) =>{
    return {
        type: actionTypes.ADD_TEACHER_SUCCESS,
        payload: data
    }
}

const addTeacherFailure = (error) =>{
    return {
        type: actionTypes.ADD_TEACHER_FAILURE,
        payload: error
    }
}

export const addTeacher = (data) =>{

    return dispatch =>{
        dispatch(addTeacherStart())
        axios.post(api.ADD_TEACHER,data)
            .then(response => {
                dispatch(addTeacherSuccess(response.data))
            })
            .catch(error => {
                dispatch(addTeacherFailure(error.response.data))
            })

    }
}