import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import Login from '../components/Login/reducer';
import AppHeader from '../components/AppHeader/reducer';

export default combineReducers({
  common,
  Login,
  AppHeader,
  router: routerReducer
});
