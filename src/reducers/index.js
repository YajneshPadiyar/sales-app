import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import Login from '../components/Login/reducer';

export default combineReducers({
  common,
  Login,
  router: routerReducer
});
