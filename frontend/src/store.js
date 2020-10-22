import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { callDetailReducer, callListReducer } from './reducers/callsReducer'

const reducer = combineReducers({
    callList: callListReducer,
    callDetails: callDetailReducer,
})

const initalState = {}

const middleware =[thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store