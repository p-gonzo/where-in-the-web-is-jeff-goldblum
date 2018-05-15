import { combineReducers } from 'redux';
import currentText from './currentText.js';

var rootReducer = combineReducers({
  currentText: currentText
});

//TODO: define the root reducer for this app



export default rootReducer;