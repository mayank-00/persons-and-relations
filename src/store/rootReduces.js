import { combineReducers } from "redux";

import personsReducers from './persons/reducer';

export default combineReducers({
  persons: personsReducers
})