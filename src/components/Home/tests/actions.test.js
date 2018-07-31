import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST,
  UPDATE_AFTER_SEARCH,
  CHANGE_LIST_PAGE,
 } from '../constants';


import {
  setZoneId,
  updateZoneList,
  filterZone,
  incrementPage,
  decrementPage,
  getCurrentPageData,
} from '../actions';

describe('Home Actions', () => {
  it('setZoneId', () => {
    const Ref_Id = "ABC";
    const expectedResult = {
      type: SET_ZONE_ID,
      value: Ref_Id
    };
    expect(setZoneId(Ref_Id)).toEqual(expectedResult);
  });

  it('updateZoneList', () => {
    const ZoneList = [{'A': 'a', 'B': 'b'}];
    const expectedResult = {
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: ZoneList,
    }
    expect(updateZoneList(ZoneList)).toEqual(expectedResult);
  });

  describe('filterZone' , () => {
    const ZoneList = [
      {"ZONE_NAME": "a", "REF_ID": 1223, "ZONE_ADDR": "Test"},
      {"ZONE_NAME": "b", "REF_ID": 456, "ZONE_ADDR": "apple"},
      {"ZONE_NAME": "c", "REF_ID": 789, "ZONE_ADDR": "samsung"},
    ];
    let searchString = "";
    let expectedResult = {
      type: UPDATE_AFTER_SEARCH,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: [],
      SEARCH_STRING: "",
    };

    it('filterZone empty searchString', () => {
      expect(filterZone(ZoneList, searchString)).toEqual(expectedResult);
    });

    it('filterZone search ZoneName', () => {
      searchString = "c";
      const SearchResult = [{"ZONE_NAME": "c", "REF_ID": 789, "ZONE_ADDR": "samsung"}];
      expectedResult = {
        type: UPDATE_AFTER_SEARCH,
        SEARCH_STRING: searchString,
        ZONE_LIST: ZoneList,
        S_ZONE_LIST: SearchResult,
      };
      expect(filterZone(ZoneList, searchString)).toEqual(expectedResult);
    });

    it('filterZone search REF_ID', () => {
      searchString = "789";
      const SearchResult = [{"ZONE_NAME": "c", "REF_ID": 789, "ZONE_ADDR": "samsung"}];
      expectedResult = {
        type: UPDATE_AFTER_SEARCH,
        SEARCH_STRING: searchString,
        ZONE_LIST: ZoneList,
        S_ZONE_LIST: SearchResult,
      };
      expect(filterZone(ZoneList, searchString)).toEqual(expectedResult);
    });

  });

  it('filterZone empty searchString' , () => {
    const ZoneList = [{"A": "a"}, {"B": "b"}];
    const expectedResult = {
      type: UPDATE_AFTER_SEARCH,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: [],
      SEARCH_STRING: "",
    };

    expect(filterZone(ZoneList, "")).toEqual(expectedResult);
  });


  it('incrementPage', () => {
    const currPage = 2;
    const expectedResult = {type: CHANGE_LIST_PAGE,VALUE:(currPage+1)};
    expect(incrementPage(currPage)).toEqual(expectedResult);
  });

  it('decrementPage', () => {
    const currPage = 2;
    const expectedResult = {type: CHANGE_LIST_PAGE,VALUE:(currPage-1)};
    expect(decrementPage(currPage)).toEqual(expectedResult);
  });

  it('getCurrentPageData', () => {
    const data = [1,2,3,4,5,6,7,8,9];
    let currPage = 3;
    const currPageSize = 2;
    let expectedResult = [5,6];
    expect(getCurrentPageData(data, currPage, currPageSize)).toEqual(expectedResult);
    currPage = 1;
    expectedResult = [1,2];
    expect(getCurrentPageData(data, currPage, currPageSize)).toEqual(expectedResult);
    currPage = 5;
    expectedResult = [9];
    expect(getCurrentPageData(data, currPage, currPageSize)).toEqual(expectedResult);
  });


});
