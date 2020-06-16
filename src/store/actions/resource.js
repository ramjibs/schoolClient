import * as actionTypes from './ActionTypes'
import * as api from '../../api'
import axios from '../../axios-school'


const getAllSubjectsStart = () => {

    return {
        type: actionTypes.GET_ALL_SUBJECTS_START
    }
}

const getAllSubjectsSuccess = (data) => {
    return {
        type: actionTypes.GET_ALL_SUBJECTS_SUCCESS,
        payload: {
            data: data
        }
    }
}

const getAllSubjectsFailure = (error) => {

    return {
        type: actionTypes.GET_ALL_SUBJECTS_FAILURE,
        payload: {
            error: error
        }
    }
}

export const getAllSubjects = () => {

    return dispatch => {
        dispatch(getAllSubjectsStart())
        axios.get(api.GET_ALL_SUBJECTS)
            .then(response => {
                dispatch(getAllSubjectsSuccess(response.data))
            })
            .catch(error => dispatch(getAllSubjectsFailure(error.response.data)))
    }
}

const getAllStatesStart = () => {

    return {
        type: actionTypes.GET_ALL_STATES_START
    }

}

const getAllStatesSuccess = (data) => {
    return {
        type: actionTypes.GET_ALL_STATES_SUCCESS,
        payload: {
            data: data
        }
    }
}

const getAllStatesFailure = (error) => {

    return {
        type: actionTypes.GET_ALL_STATES_FAILURE,
        payload: {
            error: error
        }
    }
}

export const getAllStates = () => {
    return dispatch =>{
        dispatch(getAllStatesStart())
        axios.get(api.GET_ALL_STATES)
            .then(response =>{
                dispatch(getAllStatesSuccess(response.data))
            })
            .catch(error => {
                dispatch(getAllStatesFailure(error.response.data))
            })
    }
}

const getAllCategoryStart = () =>{

    return{
        type: actionTypes.GET_ALL_CATEGORY_START
    }
}

const getAllCategorySuccess = (data) =>{
    return {
        type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
        payload: {
            data: data
        }
    }
}

const getAllCategoryFailure = (error) => {

    return {
        type: actionTypes.GET_ALL_CATEGORY_FAILURE,
        payload: {
            error: error
        }
    }
}

export const getAllCategory = () => {
    return dispatch =>{
        dispatch(getAllCategoryStart())
        axios.get(api.GET_ALL_CATEGORY)
            .then(response =>{
                dispatch(getAllCategorySuccess(response.data))
            })
            .catch(error => {
                dispatch(getAllCategoryFailure(error.response.data))
            })
    }
}