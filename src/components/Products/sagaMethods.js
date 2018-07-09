import {  put, call } from 'redux-saga/effects';
import { createProductComplete, updateProductList } from './actions';
import { API_END_POINT, API_POST_OPTIONS } from '../../constants/api_constants';
import request from '../../utils/request';

function* createProduct(action) {
  try{
    const response =  yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action.body)}
    );
    yield put(createProductComplete(response));
  }catch (e) {
    console.log(e);
  }
}

function* getProducts(action) {
  try{
    const response =  yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action.body)}
    );
    yield put(updateProductList(response));
  }catch (e) {
    console.log(e);
  }
}



export {
  createProduct,
  getProducts,
};
