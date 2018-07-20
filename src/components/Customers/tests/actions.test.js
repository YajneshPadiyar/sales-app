import {
  UPDATE_CUSTOMER_LIST,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_URI,
  ADD_CUSTOMER_URI,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER
} from '../constants';

import {
  onInputChange,
  updateCustomerList,
  getCustomerList,
  addCustomer,
  addedCustomer,
  changeComponentView
} from '../actions';

describe('Customer Actions', () => {
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
    };
    expect(onInputChange(action)).toEqual(expectedResult);
  });

  describe('updateCustomerList API Response', () =>{
      const items = [{'A': 'A'}, {'B': 'B'}];
      const expectedResult = {
        type: UPDATE_CUSTOMER_LIST,
        VALUE: items,
      };
      let response = {
          data: {
            Items: items
        }
      };

      it('updateCustomerList success', () => {
        response = {...response, status: true};
        expect(updateCustomerList(response)).toEqual(expectedResult);
      });
      //console.log(response2);
      it('updateCustomerList failure', () => {
        response = {...response, status: false};
        expect(updateCustomerList(response)).toEqual({});
      });
  });

  it('getCustomerList', () => {
    const expectedResult = {
      type: GET_CUSTOMER_LIST,
      API_URI: GET_CUSTOMER_URI,
      body: {LINE_ID:"A001"}
    };
    expect(getCustomerList()).toEqual(expectedResult);
  });

  it('addCustomer', () => {
    const data = {'A': 'A'};
    const expectedResult = {
      type: ADD_CUSTOMER,
      API_URI: ADD_CUSTOMER_URI,
      body: data,
    };
    expect(addCustomer(data)).toEqual(expectedResult);
  });

  it('addedCustomer success', () => {
    const expectedResult = {type: ADD_CUSTOMER_COMPLETE};
    expect(addedCustomer({status: true})).toEqual(expectedResult);
  });

  it('addedCustomer failure', () => {
    const expectedResult = {type: ADD_CUSTOMER_COMPLETE};
    expect(addedCustomer({status: false})).toEqual(expectedResult);
  });

  it('changeComponentView', () => {
    const expectedResult = {type: "X"};
    expect(changeComponentView("X")).toEqual(expectedResult);
  });

});
