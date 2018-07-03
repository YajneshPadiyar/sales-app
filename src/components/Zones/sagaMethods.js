import {  put, call } from 'redux-saga/effects';
import { createZoneComplete, updateZoneList } from './actions';
import { API_END_POINT, API_POST_OPTIONS } from '../../constants/api_constants';
import request from '../../utils/request';

function* createZone(action) {
  try{
    const response =  yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action.body)}
    );
    yield put(createZoneComplete(response));
  }catch (e) {
    console.log(e);
  }
}

function* getZones(action) {
  try{
    const response =  yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action.body)}
    );
    yield put(updateZoneList(response));
  }catch (e) {
    console.log(e);
  }
}



export {
  createZone,
  getZones
};
