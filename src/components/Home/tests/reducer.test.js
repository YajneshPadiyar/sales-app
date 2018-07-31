import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST } from '../constants';

import reducer from '../reducer';

import {
  setZoneId,
  updateZoneList,
  filterZone,
  incrementPage,
  decrementPage,
} from '../actions'

const initialState = {
  ZONE_ID: "",
  ZONE_LIST: [],
  S_ZONE_LIST: [],
  CurrentPage: 1,
  CurrentPageSize: 8,
  SearchString: "",
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

  it( 'change list page increment', () => {
    const currPage = 5;
    expectedResult = {...state, CurrentPage: currPage+1};
    expect(reducer(state, incrementPage(currPage))).toEqual(expectedResult);
  });

  it( 'change list page decrement', () => {
    const currPage = 5;
    expectedResult = {...state, CurrentPage: currPage-1};
    expect(reducer(state, decrementPage(currPage))).toEqual(expectedResult);
  });

  it('update zone list', () => {
    const ZoneList = [{'A': 'a'}, {'B': 'b'}];
    expectedResult = {
      ...state,
      ZONE_LIST: [...ZoneList],
      S_ZONE_LIST: [...ZoneList],
    };
    expect(reducer(state, updateZoneList(ZoneList))).toEqual(expectedResult);
  });
  state = expectedResult;

  it('update after search', () => {
    const ZoneList = [
      {"ZONE_NAME": "a", "REF_ID": 1223, "ZONE_ADDR": "Test"},
      {"ZONE_NAME": "b", "REF_ID": 456, "ZONE_ADDR": "apple"},
      {"ZONE_NAME": "c", "REF_ID": 789, "ZONE_ADDR": "samsung"},
    ];
    const ZoneSearchList = [{"ZONE_NAME": "c", "REF_ID": 789, "ZONE_ADDR": "samsung"},];
    const SearchString = "c";
    expectedResult = {
      ...state,
      ZONE_LIST: [...ZoneList],
      SearchString: SearchString,
      S_ZONE_LIST:  [...ZoneSearchList],
    };
    expect(reducer(state, filterZone(ZoneList, SearchString ))).toEqual(expectedResult);
  });
});
