import {
  CHANGE_FIRST_NAME,
  CHANGE_MIDDLE_NAME,
  CHANGE_LAST_NAME,
  CHANGE_TRADING_NAME,
  CHANGE_ADDRESS,
  CHANGE_TRADE_ACCNT_NAME,
  UPDATE_CUSTOMER_LIST,
  ADD_CUSTOMER_COMPLETE,
  CHANGE_COMPONENT_LIST,
  CHANGE_COMPONENT_ADD,
  CHANGE_COMPONENT_EDIT,
  CHANGE_LIST_PAGE,
  EDIT_CUSTOMER,
} from '../constants';


const initialState ={
    CompState: CHANGE_COMPONENT_LIST,
    FirstName: "",
    MiddleName: "",
    LastName: "",
    TradingName: "",
    TradeAccntNum: "",
    Address: "",
    CurrentPage: 1,
    CurrentPageSize: 8,
  CustomerList: [],
};

import {
  onInputChange,
  updateCustomerList,
  addedCustomer,
  changeComponentView,
  updateCustomer,
  editCustomer,
} from '../actions';

import reducer from '../reducer';

describe('Customer Reducer', () => {
  let state = initialState;
  let expectedResult = state;

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  const testCases = [
    { CaseName: 'FirstName', testValue: 'testValue', type: CHANGE_FIRST_NAME,},
    { CaseName: 'MiddleName', testValue: 'testValue', type: CHANGE_MIDDLE_NAME,},
    { CaseName: 'LastName', testValue: 'testValue', type: CHANGE_LAST_NAME,},
    { CaseName: 'TradingName', testValue: 'testValue', type: CHANGE_TRADING_NAME,},
    { CaseName: 'TradeAccntNum', testValue: 'testValue', type: CHANGE_TRADE_ACCNT_NAME,},
    { CaseName: 'Address', testValue: 'testValue', type: CHANGE_ADDRESS,},
    { CaseName: 'CurrentPage', testValue: 'testValue', type: CHANGE_LIST_PAGE,},
  ];

  for (let testCase in testCases){
    const test = testCases[testCase];
    it('should update '+test.CaseName, () => {
      expectedResult = {...state, [test.CaseName]: test.testValue}
      const action = {
        type: test.type,
        value: test.testValue,
      };
      expect(reducer(state, onInputChange(action))).toEqual(expectedResult);
    });
  }

  it('Update Customer List', () => {
    const items = [{'A': 'A'}, {'B': 'B'}];
    let response = {
        status: true,
        data: {
          Items: items
      }
    };
    expectedResult = {...state, CustomerList:  items};
    //console.log(updateCustomerList(response));
    expect(reducer(state, updateCustomerList(response))).toEqual(expectedResult);
  });

  it('Add Customer Complete', () => {
    expectedResult = {...state , CompState: CHANGE_COMPONENT_LIST};
    expect(reducer(state, addedCustomer({status:true}))).toEqual(expectedResult);
  });

  it('CHANGE_COMPONENT_LIST', () => {
    expectedResult = {...state , CompState: CHANGE_COMPONENT_LIST};
    expect(reducer(state, changeComponentView(CHANGE_COMPONENT_LIST)))
    .toEqual(expectedResult);
  });

  it('CHANGE_COMPONENT_ADD', () => {
    expectedResult = {...state , CompState: CHANGE_COMPONENT_ADD};
    expect(reducer(state, changeComponentView(CHANGE_COMPONENT_ADD)))
    .toEqual(expectedResult);
  });

  it('EDIT_CUSTOMER', () => {

    const request = {
      FIRST_NAME: "A",
      MIDDLE_NAME: "B",
      LAST_NAME: "C",
      TRADING_NUM: "1",
      TRADING_NAME: "D",
      ADDRESS: "E",
      ZONE_ID: "123",
      REF_ID: "1234",
    };

    expectedResult = {...state,
      FirstName: request.FIRST_NAME,
      MiddleName: request.MIDDLE_NAME,
      LastName: request.LAST_NAME,
      TradingName: request.TRADING_NAME,
      TradeAccntNum: request.TRADING_NUM,
      Address: request.ADDRESS,
      REF_ID: request.REF_ID,
      ZONE_ID: request.ZONE_ID,
      CompState: CHANGE_COMPONENT_EDIT};
    expect(reducer(state, editCustomer(request)))
    .toEqual(expectedResult);
  });

});
