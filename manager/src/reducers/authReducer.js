import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types'

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...initialState, // this will reset the unchanged properties like email ans password clear
                user: action.payload
                // error: '',
                // loading: false,
                // email: '',

            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication Failure',
                loading: false
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: true
            }
            
        default:
            return state
    }
}