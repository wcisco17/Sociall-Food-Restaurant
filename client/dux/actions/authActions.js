import * as types from '../contanst';
import { Font } from 'expo'

// import {firebase} from '../../utils/api/firebaseConfig'


export const loadFonts = () => {
    return async dispatch => {
        await Font.loadAsync({
            'montserrat': require('../../utils/fonts/Montserrat-Regular.ttf',)
        })
        dispatch({
            type: types.LOAD_FONTS,
            payload: true
        })
    }
}

// Login Page (Restaurant provide their email)
function login() {
    return {
        type: types.LOG_IN,
    }
}


function loginSuccess(data) {
    return {
        type: types.LOG_IN_SUCCESS,
        user: data
    }
}

function loginFailure(err) {
    return {
        type: types.LOG_IN_FAILURE,
        error: err
    }
}


export const authenticate = (email, password) => {
    return (dispatch) => {
        dispatch(login())
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
                dispatch(loginSuccess(user))
                console.log("User Sign Up success", user)
        })
        .catch((err) => {
                dispatch(loginFailure(error))
                console.table('Error Sign Up', err);
          })
    }
}
