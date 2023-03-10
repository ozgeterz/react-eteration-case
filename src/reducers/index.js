import addtocardReducer from "./addtocardReducer.js";
import clicktocardReducer from "./clicktocardReducer.js";
import { combineReducers } from "redux";

const allreducers = combineReducers({
  addToCard: addtocardReducer,
  cardClick: clicktocardReducer,
});

export default allreducers;
