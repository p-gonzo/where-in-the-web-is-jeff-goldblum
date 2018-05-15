import ReactDOM from 'react-dom';
import React from 'react';

import store from './store/store.js';

import {Provider} from 'react-redux';
import AppContainer from './components/App.js';


ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
);
