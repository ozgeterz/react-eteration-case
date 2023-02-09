import addtocardReducer from "./addtocardReducer.js"
import clicktocardReducer from "./clicktocardReducer.js"
import {combineReducers} from 'redux'

const allreducers=combineReducers({
    addtocard:addtocardReducer,
    cardclick:clicktocardReducer,
})

export default allreducers