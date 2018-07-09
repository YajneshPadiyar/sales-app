import { takeLatest } from 'redux-saga/effects'

import { AUTHENTICATE } from './constants/actionTypes';
import {
  GET_CUSTOMER_LIST,
  ADD_CUSTOMER
} from './components/Customers/constants';

import { CREATE_ZONE, GET_ZONE_LIST } from './components/Zones/constants';
import { CREATE_PRODUCT, GET_PRODUCT_LIST } from './components/Products/constants';

import { validateLogin } from './components/Login/sagaMethods';
import { getListOfCustomers, addCustomer } from './components/Customers/sagaMethods';
import { createZone, getZones } from './components/Zones/sagaMethods';
import { createProduct, getProducts } from './components/Products/sagaMethods';


export default function* mySaga() {
  //console.log("mySaga");
  yield takeLatest(AUTHENTICATE, validateLogin);
  yield takeLatest(GET_CUSTOMER_LIST, getListOfCustomers);
  yield takeLatest(ADD_CUSTOMER, addCustomer);
  yield takeLatest(CREATE_ZONE, createZone);
  yield takeLatest(GET_ZONE_LIST, getZones);
  yield takeLatest(GET_PRODUCT_LIST, getProducts);
  yield takeLatest(CREATE_PRODUCT, createProduct);
}
