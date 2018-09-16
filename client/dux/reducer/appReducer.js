import * as types from '../contanst'


const initialState = {
    fontLoaded: false
}


export default function (state = initialState, action) {
    switch(action.type) {
        case types.LOAD_FONTS:
            return {
                ...state,
                    fontLoaded: action.payload
            }
            default:
         return {
                ...state,
                ...initialState
            }
    }
}