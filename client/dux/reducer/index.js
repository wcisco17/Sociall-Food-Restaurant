import { combineReducers } from "redux";
import appStyles from './appReducer'
import auth from './authReducer'

export default combineReducers({
    appStyles,
    auth
})