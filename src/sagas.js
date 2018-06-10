import {  put,  takeLatest } from 'redux-saga/effects'
//import { AUTHENTICATE } from './container/LoginPage/constants';
//import { performValidateLogin } from './container/LoginPage/actions';
//import {
//LOGIN_USER_NAME,
//LOGIN_PASSWORD,
//} from './container/LoginPage/constants';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* validateLogin(action) {
  console.log("Worker Saga ");
  console.log(action);
  /* try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(performValidateLogin(action.LOGIN_USER_NAME, action.LOGIN_PASSWORD));
   } catch (e) {
      yield put(performValidateLogin(action.LOGIN_USER_NAME, action.LOGIN_PASSWORD));
   }*/
}


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  console.log("mySaga");
  yield takeLatest("AUTHENTICATE", validateLogin);
}
