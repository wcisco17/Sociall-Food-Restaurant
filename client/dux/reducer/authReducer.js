import * as types from '../contanst'




const initialState = {
    user: {},
    isAuthenticated: false,


    signInFailure: false,
    signInSuccess: false,

    signInFailureMessage: '',
    signInSuccessMesssage: ''
}

export default function (state = initialState, action) {
    switch(action.type) {
        case types.LOG_IN:
            return {
                ...state,
                isAuthenticated: true,
                signInFailure: false,
                signInSuccess: false
            }
            case types.LOG_IN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuthenticated: false,
                signInFailure: false,
                signInSuccess: true,
            }
            case types.LOG_IN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                signInFailure: true,
                signInSuccess: false,
                signInFailureMessage: action.error
            }
            default: 
                return {
                    ...state,
                    ...initialState
                }
    }
}