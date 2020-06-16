import * as actionTypes from '../actions'

const initialState = {

    loadingSubjects: false,
    subjects: [],
    errorSubjects: null,
    loadingStates: false,
    states: [],
    errorStates: null,
    loadingCategory: false,
    categories: [],
    errorCategory: null


}

export const reducerResource = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_ALL_SUBJECTS_START:
            return {
                ...state,
                loadingSubjects: true
            }
        case actionTypes.GET_ALL_SUBJECTS_SUCCESS:
            return {
                ...state,
                loadingSubjects: false,
                subjects: action.payload.data

            }
        case actionTypes.GET_ALL_SUBJECTS_FAILURE:
            return {
                ...state,
                loadingSubjects: false,
                errorSubjects: action.payload.error
            }

        case actionTypes.GET_ALL_STATES_START:

            return {
                ...state,
                loadingStates: true
            }

        case actionTypes.GET_ALL_STATES_SUCCESS:

            return {
                ...state,
                loadingStates: false,
                states: action.payload.data
            }
        case actionTypes.GET_ALL_STATES_FAILURE:
            return {
                ...state,
                loadingStates: false,
                errorStates: action.payload.error
            }

        case actionTypes.GET_ALL_CATEGORY_START:

            return {
                ...state,
                loadingCategory: true
            }

        case actionTypes.GET_ALL_CATEGORY_SUCCESS:

            return {
                ...state,
                loadingCategory: false,
                categories: action.payload.data
            }
        case actionTypes.GET_ALL_CATEGORY_FAILURE:
            return {
                ...state,
                loadingCategory: false,
                errorCategory: action.payload.error
            }

        default:
            return state
    }
}