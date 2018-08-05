import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import mySaga from '../sagas';
import reducer from '../reducers';
//import {persistConfig} from './persistConfig';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, sagaMiddleware, createLogger())
    //return applyMiddleware(myRouterMiddleware, sagaMiddleware)
  }
};

//const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));

//export const persistor = persistStore(store);

sagaMiddleware.run(mySaga)
