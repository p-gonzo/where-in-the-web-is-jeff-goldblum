import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer, 
  {
    currentText: 'Intializing...',
    currentArticle: 'Hack Reactor',
    articleList: [],
    clickCounter: 0
  }, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;