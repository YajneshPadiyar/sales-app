import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import Login from '../components/Login/reducer';
import Customers from '../components/Customers/reducer';
import Zones from '../components/Zones/reducer';
import Sales from '../components/Sales/reducer';
import AppHeader from '../components/AppHeader/reducer';

export default combineReducers({
  common,
  Login,
  AppHeader,
  Customers,
  Zones,
  Sales,
  router: routerReducer
});
