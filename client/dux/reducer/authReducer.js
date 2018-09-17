import * as types from '../contanst'




const initialState = {
    user: {},
    isAuthenticated: false,

    tokenUser: {},
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
            case types.CURRENT_USER_INFO:
            return {
                ...state,
                tokenUser: action.tokenUser
            }
            case types.LOG_OUT:
            return {
                ...state,
                ...initialState
            }
            default:
                return {
                    ...state,
                    ...initialState
                }
    }
}