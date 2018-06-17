import {  put, call } from 'redux-saga/effects';
import { performValidateLogin } from './actions';
import { API_END_POINT, API_POST_OPTIONS } from '../../constants/api_constants';
import request from '../../utils/request';

function* validateLogin(action) {
  //console.log("Worker Saga ");
  //console.log(action);
  try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      //console.log(API_END_POINT+action.API_URI);
      const response =  yield call(
        request,
        API_END_POINT+action.API_URI,
        {...API_POST_OPTIONS, body: JSON.stringify(action)}
      );
      yield put(performValidateLogin(response));
   } catch (e) {
      //yield put(performValidateLogin(action.USER_NAME, action.PASSWORD));
      console.log(e);
   }
}

export { validateLogin };
