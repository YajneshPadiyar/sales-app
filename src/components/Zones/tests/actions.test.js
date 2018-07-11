import {
  GET_ZONE_LIST,
  CREATE_ZONE_URI,
  CREATE_ZONE,
  RESET_ZONE_FORM,
  UPDATE_ZONE_LIST,
  GET_ZONE_URI
} from '../constants';

import {
  getZoneList,
  onInputChange,
  onCreateZone,
  createZoneComplete,
  updateZoneList
} from '../actions';

describe('Zone Actions', () => {
  it('getZoneList', () => {
    const data = {'A': 'a', 'B': 'b'};
    const expectedResult = {
      type: GET_ZONE_LIST,
      API_URI: GET_ZONE_URI,
      body: data
    };
    expect(getZoneList(data)).toEqual(expectedResult);
  });

  it('onInputChange', () => {
    const type = "TYPE";
    const value = "VALUE";
    const expectedResult = {
      type: type,
      VALUE: value,
    };
    const action = {
      type: type,
      value: value,
    }
    expect(onInputChange(action)).toEqual(expectedResult);
  });

  it('onCreateZone', () => {
    const data = {'A': 'a', 'B': 'b'};
    const expectedResult = {
      type: CREATE_ZONE,
      API_URI: CREATE_ZONE_URI,
      body: data
    };
    expect(onCreateZone(data)).toEqual(expectedResult);
  });

  it('createZoneComplete success', () => {
    const expectedResult = {
      type: RESET_ZONE_FORM
    };
    const response = {
      status: true
    };
    expect(createZoneComplete(response)).toEqual(expectedResult);
  });

  it('createZoneComplete failure', () => {
    const expectedResult = {
      type: RESET_ZONE_FORM
    };
    const response = {
      status: false
    };
    expect(createZoneComplete(response)).toEqual(expectedResult);
  });

  it('updateZoneList success', () => {
    const data = [{'A': 'a'}, {'B': 'b'}];
    const expectedResult = {
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: data
    };
    const response = {
      status: true,
      data: {Items: data}
    };
    expect(updateZoneList(response)).toEqual(expectedResult);
  });

  it('updateZoneList failure', () => {
    const data = [{'A': 'a'}, {'B': 'b'}];
    const expectedResult = {
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: []
    };
    const response = {
      status: false,
      data: {Items: data}
    };
    expect(updateZoneList(response)).toEqual(expectedResult);
  });
});
