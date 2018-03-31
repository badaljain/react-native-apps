import { combineReducers } from 'redux'
import libraryReducer from './components/library/reducer'

export default combineReducers ({
    library: libraryReducer
})