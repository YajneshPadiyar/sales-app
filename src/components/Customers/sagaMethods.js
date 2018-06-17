import {  put, call } from 'redux-saga/effects';
import { updateCustomerList } from './actions';
import { API_END_POINT, API_POST_OPTIONS } from '../../constants/api_constants';
import request from '../../utils/request';

function* getListOfCustomers(action) {
  try{
    const response =  yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action)}
    );
    yield put(updateCustomerList(response));
  }catch (e) {
    console.log(e);
  }
}

export { getListOfCustomers };
