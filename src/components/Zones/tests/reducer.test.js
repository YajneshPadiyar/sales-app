
import {
  CHANGE_ZONE_ADDR,
  CHANGE_ZONE_NAME,
  RESET_ZONE_FORM,
  UPDATE_ZONE_LIST
} from '../constants';

import {
  onInputChange,
  createZoneComplete,
  updateZoneList
} from '../actions';

import reducer from '../reducer';

const initialState = {
  ZONE_NAME: "",
  ZONE_ADDR: "",
  ZONE_LIST: []
};

describe('Zone Reducer', () => {
  let state = initialState;
  let expectedResult = state;


  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  const testCases =[
    { CaseName: 'ZONE_NAME', testValue: "testValue", type: CHANGE_ZONE_NAME,},
    { CaseName: 'ZONE_ADDR', testValue: "testValue", type: CHANGE_ZONE_ADDR,},
  ];

  for (let testCase in testCases){
    const test = testCases[testCase];
    const expectedResult = {...state, [test.CaseName]: test.testValue};
    const action ={
      type: test.type,
      value: test.testValue,
    };
    expect(reducer(state, onInputChange(action))).toEqual(expectedResult);
  }

  it('reset zone form', () =>{
    const expectedResult = {...state, ZONE_NAME: "", ZONE_ADDR: ""};
    expect(reducer(state, createZoneComplete({status:true}))).toEqual(expectedResult);
  });

  it('update zone list', () =>{
    const data = [{'A': 'a'}, {'B': 'b'}];
    const expectedResult = {...state, ZONE_LIST: data};
    const response = {
      status: true,
      data: {Items: data}
    };
    expect(reducer(state, updateZoneList(response))).toEqual(expectedResult);

  });
});
