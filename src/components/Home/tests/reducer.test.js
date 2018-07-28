import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST } from '../constants';

import reducer from '../reducer';

import {
  setZoneId,
  updateZoneList,
} from '../actions'

const initialState = {
  ZONE_ID: "",
  ZONE_LIST: []
};

describe('Home Reducer', () => {
  let state = initialState;
  let expectedResult = state;

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('set zone id', () => {
    const ZoneId = "123";
    expectedResult = {...state, ZONE_ID: ZoneId, ZONE_LIST: [...state.ZONE_LIST] };
    expect(reducer(state, setZoneId(ZoneId))).toEqual(expectedResult);
  });
  it('update zone list', () => {
    const ZoneList = [{'A': 'a'}, {'B': 'b'}];
    expectedResult = {...state, ZONE_LIST: [...ZoneList]};
    expect(reducer(state, updateZoneList(ZoneList))).toEqual(expectedResult);
  });
  state = expectedResult;
  
  it('set zone id', () => {
    const ZoneId = "123";
    expectedResult = {...state, ZONE_ID: ZoneId, ZONE_LIST: [...state.ZONE_LIST] };
    expect(reducer(state, setZoneId(ZoneId))).toEqual(expectedResult);
  });
});
