import {
  UPDATE_CUSTOMER_LIST,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_URI,
  ADD_CUSTOMER_URI,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER,
  CHANGE_LIST_PAGE,
  UPDATE_CUSTOMER_URI,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_URI,
} from '../constants';

import {
  onInputChange,
  updateCustomerList,
  getCustomerList,
  addCustomer,
  addedCustomer,
  changeComponentView,
  incrementPage,
  decrementPage,
  getCurrentPageData,
  updateCustomer,
  updatedCustomer,
  deleteCustomer,
  deletedCustomer,
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
      let expectedResult = {
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
        expectedResult.VALUE=[];
        response = {...response, status: false};
        expect(updateCustomerList(response)).toEqual(expectedResult);
      });
  });

  it('getCustomerList', () => {
    const expectedResult = {
      type: GET_CUSTOMER_LIST,
      API_URI: GET_CUSTOMER_URI,
      body: {LINE_ID:"1002"}
    };
    expect(getCustomerList("1002")).toEqual(expectedResult);
    expect(getCustomerList(null)).toEqual(expectedResult);
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

  it('updateCustomer', () => {
    const REF_ID = "ABD";
    const request = {
      A: "B",
      B: "C",
    };
    const expectedResult = {
      type: UPDATE_CUSTOMER,
      API_URI: UPDATE_CUSTOMER_URI,
      body: {
        REF_ID: REF_ID,
        data: request
      }
    };
    expect(updateCustomer(REF_ID, request)).toEqual(expectedResult);
  });


  it('updatedCustomer', () => {
    const expectedResult = {
      type: ADD_CUSTOMER_COMPLETE
    };
    let response = {
      status: true
    }
    expect(updatedCustomer(response)).toEqual(expectedResult);
    response.status = false;
    expect(updatedCustomer(response)).toEqual(expectedResult);
  });

  it('deleteCustomer', () => {
    const refId= 123;
    const expectedResult = {
      type: DELETE_CUSTOMER,
      API_URI: DELETE_CUSTOMER_URI,
      body:{
        REF_ID: 123
      }
    };
    expect(deleteCustomer(refId)).toEqual(expectedResult);
  });

  it('deletedCustomer', () => {
    let response = {
      status: false
    };
    const expectedResult = {
      type: ADD_CUSTOMER_COMPLETE,
    };
    expect(deletedCustomer(response)).toEqual(expectedResult);
    response.status = true;
    expect(deletedCustomer(response)).toEqual(expectedResult);
  });

});
