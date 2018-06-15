import {  put,  takeLatest, call } from 'redux-saga/effects'
import { AUTHENTICATE } from './constants/actionTypes';
import { performValidateLogin } from './components/Login/actions';
import { updateCustomerList } from './components/Customers/actions';
import { GET_CUSTOMER_LIST } from './components/Customers/constants';
import request from './utils/request';
import { API_END_POINT, API_POST_OPTIONS } from './constants/api_constants';
//import {
//LOGIN_USER_NAME,
//LOGIN_PASSWORD,
//} from './container/LoginPage/constants';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
                    //"http://localhost:3000/login/token"
//const API_END_POINT = "http://localhost:3000/login/token";
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


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  //console.log("mySaga");
  yield takeLatest(AUTHENTICATE, validateLogin);
  yield takeLatest(GET_CUSTOMER_LIST, getListOfCustomers);
}
