import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


// The view layer binding provides 3 concept:

// + The Provider component: wrap Component Tree. 
// Helping Component connect to Store in a easy way by connect()

// + connect() : is a fuction that was provided by The View Layer Binding like 'react-redux'.
// If a component want to receive the update state, it must wrap itself by a connect().
// After that, connect function  will establish all systems that connect to it by 'selector'

// + selector: this is your function. It turn out that which part of State that component
// need like properties.

// ROOT COMPONENT 
// => create Store
// => Let Store use Root Reducer via createStore().
// => Root Reducer have a team that regroup by combineReducers() (./reducer/index.js)