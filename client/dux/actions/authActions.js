import * as types from '../contanst';
import { Font } from 'expo'


import * as firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyAWH7umiEpC8BOv4EZISujVyhnwbDMmoKE",
    authDomain: "restaurantsocially-food.firebaseapp.com",
    databaseURL: "https://restaurantsocially-food.firebaseio.com",
    projectId: "restaurantsocially-food",
    storageBucket: "restaurantsocially-food.appspot.com",
    messagingSenderId: "98174883851"
};

firebase.initializeApp(firebaseConfig);

export const loadFonts = () => {
    return async dispatch => {
        await Font.loadAsync({
            'montserrat': require('../../utils/fonts/Montserrat-Regular.ttf'),
            'montserrat-bold': require('../../utils/fonts/Montserrat-Bold.ttf')
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


export const authenticate = (username, password) => {
    return (dispatch) => {
        dispatch(login())
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((user) => {
                dispatch(loginSuccess(user))
                console.log("User Sign Up success", user)
        })
        .catch((err) => {
            if (err) {
                dispatch(loginFailure(error))
                console.table('Error Sign Up', err);

            }
          })
    }
}


function logout() {
    return {
        type: types.LOG_OUT,
    }
}

export const logOutUser = () => {
    return dispatch => {
        dispatch(logout())
        firebase.auth().signOut()
        .then((res) => {
            console.log('Success', res)
        })
        .catch((err) => {
            console.log('Error', err)
        })
    }
}


function getUser(tokenUser) {
    return {
        type: types.CURRENT_USER_INFO,
        tokenUser
    }
}

// export const getUsersStatus = () => {
//     return (dispatch) => {
//         firebase.auth().onAuthStateChanged((user) => {
//             dispatch(loginSuccess(user))
//             if (user !== null) {
//              console.log("We are authenticated now!");
//              dispatch(getUser(user))
//             } else {
//                 console.log('false not authenticated')
//             }
//           })
//     }
// }

