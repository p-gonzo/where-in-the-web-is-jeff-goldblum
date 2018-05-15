import { combineReducers } from 'redux';
import currentText from './currentText.js';
import articleList from './articleList.js';
import currentArticle from './currentArticle.js';

var rootReducer = combineReducers({
  currentText: currentText,
  currentArticle: currentArticle,
  articleList: articleList
});

//TODO: define the root reducer for this app



export default rootReducer;