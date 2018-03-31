import firebase from 'firebase'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

const loginUserStart = () => {
    return {
        type: LOGIN_USER
    }
}

const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}

const loginUserFail = () => {
    return {
        type: LOGIN_USER_FAIL
    }
}

export const loginUser = ({ email, password }) => {
    return dispatch => {
        dispatch(loginUserStart())
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => dispatch(loginUserSuccess(user)))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => dispatch(loginUserSuccess(user)))
                .catch(() => dispatch(loginUserFail()))
        })
    }
}