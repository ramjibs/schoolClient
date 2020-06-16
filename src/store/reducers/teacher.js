import * as actionTypes from '../actions'

const initialState = {
    addNewTeacherLoading: false,
    addNewTeacherSuccess: false,
    addNewTeacherSuccessMessage: null,
    addNewTeacherFailure: false,
    addNewTeacherError: null,


}

export const  reducerTeacher = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.ADD_TEACHER_START:
            return {
                ...state,
                addNewTeacherLoading: true
            }
        case actionTypes.ADD_TEACHER_SUCCESS:
            return {
                ...state,
                addNewTeacherLoading: false,
                addNewTeacherSuccess: true,
                addNewTeacherSuccessMessage: action.payload

            }
        case actionTypes.ADD_TEACHER_FAILURE:
            return {
                ...state,
                addNewTeacherLoading: false,
                addNewTeacherFailure: true,
                addNewTeacherError: action.payload
            }
        default:
            return state
    }
}