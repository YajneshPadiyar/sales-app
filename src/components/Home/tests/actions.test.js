import { SET_ZONE_ID, UPDATE_ZONE_LIST } from '../constants';


import {
  setZoneId,
  updateZoneList
} from '../actions';

describe('Home ACtions', () => {
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
      ZONE_LIST: ZoneList
    }
    expect(updateZoneList(ZoneList)).toEqual(expectedResult);
  });
});
