import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

import App from './containers/app';
import rootReducer from './reducers/root_reducer';
import configureStore from './store/configureStore';

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
