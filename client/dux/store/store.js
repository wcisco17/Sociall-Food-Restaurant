import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'

const initialState = {}

const middleWare = [thunk]



export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
    )
)
