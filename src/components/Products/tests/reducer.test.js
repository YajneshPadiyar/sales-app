import {
  UPDATE_PRODUCT_LIST,
  CHANGE_PRODUCT_NAME,
  CHANGE_PRODUCT_DESC,
  CHANGE_RETAIL_PRICE,
  CHANGE_WHOLE_PRICE,
} from '../constants';

import {
  updateProductList,
  onInputChange,
} from '../actions';

import reducer from '../reducer';

const initialState = {
  PRODUCT_NAME: "",
  PRODUCT_DESC: "",
  PRODUCT_WHOLE_PRICE: 0,
  PRODUCT_RETAIL_PRICE:  0,
  PRODUCT_LIST:[],
}

describe('Products Reducer', () => {
  let state = initialState;
  let expectedResult = state;
  it('should return initial state', () =>{
      expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('Update Product List', () => {
    const data = [{'A': 'a'}, {'B': 'b'}];
    const response = {
      status: true,
      data: {Items: data}
    }
    expectedResult =  {...state, PRODUCT_LIST: data };
    expect(reducer(state, updateProductList(response))).toEqual(expectedResult);
  });

  const testCases = [
    { name: "PRODUCT_NAME", testValue: "testValue", type: CHANGE_PRODUCT_NAME},
    { name: "PRODUCT_DESC", testValue: "testValue", type: CHANGE_PRODUCT_DESC},
    { name: "PRODUCT_RETAIL_PRICE", testValue: "testValue", type: CHANGE_RETAIL_PRICE},
    { name: "PRODUCT_WHOLE_PRICE", testValue: "testValue", type: CHANGE_WHOLE_PRICE},
  ];

  for(let testCase in testCases){
    it('should update '+test.name, () => {
    const test = testCases[testCase];
    expectedResult = {...state, [test.name]: test.testValue};
    const action = {
      type: test.type,
      value: test.testValue,
    };

      expect(reducer(state, onInputChange(action))).toEqual(expectedResult);
    });

  }

});
