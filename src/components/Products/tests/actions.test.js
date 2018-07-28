import {
  GET_PRODUCT_URI,
  GET_PRODUCT_LIST,
  ADD_PRODUCT_URI,
  CREATE_PRODUCT,
  RESET_PRODUCT_FORM,
  UPDATE_PRODUCT_LIST,
} from '../constants';

import {
  getProductList,
  onAddProduct,
  updateProductList,
  createProductComplete,
  onInputChange,
} from '../actions';

describe('Product Action', () => {

  it('getProductList', () => {
    const data = {'A': 'a', 'B': 'b'};
    const expectedResult = {
      type: GET_PRODUCT_LIST,
      API_URI: GET_PRODUCT_URI,
      body: data,
    };
    expect(getProductList(data)).toEqual(expectedResult);
  });

  it('onAddProduct', () =>{
    const data = {'A': 'a', 'B': 'b'};
    const expectedResult = {
      type: CREATE_PRODUCT,
      API_URI: ADD_PRODUCT_URI,
      body: data,
    };
    expect(onAddProduct(data)).toEqual(expectedResult);
  });

  it('updateProductList success', () =>{
    const data = [{'A': 'a'}, {'B': 'b'}];
    const response = {
      status: true,
      data: {Items: data}
    };
    const expectedResult = {
      type: UPDATE_PRODUCT_LIST,
      PRODUCT_LIST: data
    };
    expect(updateProductList(response)).toEqual(expectedResult);
  });

  it('updateProductList failure', () =>{
    const data = [{'A': 'a'}, {'B': 'b'}];
    const response = {
      status: false,
      data: {Items: data}
    };
    const expectedResult = {
      type: UPDATE_PRODUCT_LIST,
      PRODUCT_LIST: []
    };
    expect(updateProductList(response)).toEqual(expectedResult);
  });

  it('createProductComplete success', () =>{
    const response = {status: true};
    const expectedResult = {
      type: RESET_PRODUCT_FORM,
    };
    expect(createProductComplete(response)).toEqual(expectedResult);
  });

  it('createProductComplete failure', () =>{
    const response = {status: false};
    const expectedResult = {
      type: RESET_PRODUCT_FORM,
    };
    expect(createProductComplete(response)).toEqual(expectedResult);
  });

  it('onInputChange', () =>{
    const type = "TYPE";
    const value = "VALUE";
    const action = {
      type: type,
      value: value,
    };
    const expectedResult = {
      type: type,
      VALUE: value,
    };
    expect(onInputChange(action)).toEqual(expectedResult);
  });

});
