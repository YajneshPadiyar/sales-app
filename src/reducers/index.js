import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import Login from '../components/Login/reducer';
import Home from '../components/Home/reducer';
import Order from '../components/Order/reducer';
import Customers from '../components/Customers/reducer';
import Zones from '../components/Zones/reducer';
import Products from '../components/Products/reducer';
import Sales from '../components/Sales/reducer';
import AppHeader from '../components/AppHeader/reducer';

export default combineReducers({
  common,
  Home,
  Order,
  Login,
  AppHeader,
  Customers,
  Zones,
  Products,
  Sales,
  router: routerReducer
});
