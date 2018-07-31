import {
  UPDATE_CUSTOMER_LIST,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_URI,
  ADD_CUSTOMER_URI,
  UPDATE_CUSTOMER_URI,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER,
  CHANGE_LIST_PAGE,
  EDIT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_URI,
  UPDATE_AFTER_SEARCH,
} from './constants';

import cleanNullAttributes from '../../utils/customFunction/cleanNullAttributes';

export const onInputChange=(action)=>{
  //console.log(action);
  return {
    type: action.type,
    VALUE: action.value
  }
}


export const updateCustomerList = (response) => {
//console.log(response);
if(response.status){
  return {
    type: UPDATE_CUSTOMER_LIST,
    VALUE: response.data.Items
  }
}else{
  return {
    type: UPDATE_CUSTOMER_LIST,
    VALUE: [],
  };
}
}

export const getCustomerList = (ZoneId) => {
  return {
    type: GET_CUSTOMER_LIST,
    API_URI: GET_CUSTOMER_URI,
    body: {LINE_ID:ZoneId?ZoneId.toString():"1002",}
  }
}

export const addCustomer = (data) => {
  data = cleanNullAttributes(data);
  return {
    type: ADD_CUSTOMER,
    API_URI: ADD_CUSTOMER_URI,
    body: data
  }
}

export const addedCustomer = (response) =>{
  //console.log(response);
  if(response.status){
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }else{
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }
}

export const changeComponentView = (type) => {
  return {
    type: type,
  }
}

export const incrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    VALUE: currentPage+1,
  }
}

export const decrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    VALUE: currentPage-1,
  }
}

export const getCurrentPageData = (data, currentPage, CurrentPageSize) => {
  return data.slice(currentPage*CurrentPageSize-CurrentPageSize,currentPage*CurrentPageSize);
}

export const editCustomer = (currentCustomer) => {
  //console.log(currentCustomer);
  return {
    type: EDIT_CUSTOMER,
    VALUE: {
      FirstName: currentCustomer.FIRST_NAME,
      MiddleName: currentCustomer.MIDDLE_NAME,
      LastName: currentCustomer.LAST_NAME,
      TradingName: currentCustomer.TRADING_NAME,
      TradeAccntNum: currentCustomer.TRADING_NUM,
      Address: currentCustomer.ADDRESS,
      REF_ID: currentCustomer.REF_ID,
      LINE_ID: currentCustomer.ZONE_ID,
    }
  }
}

export const updateCustomer = (REF_ID, request) => {
  return {
    type: UPDATE_CUSTOMER,
    API_URI: UPDATE_CUSTOMER_URI,
    body: {
      REF_ID: REF_ID,
      data: request
    }
  }
}

export const updatedCustomer = (response) => {
  if(response.status){
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }else{
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }
}

export const deleteCustomer = (REF_ID) => {
  return {
    type: DELETE_CUSTOMER,
    API_URI : DELETE_CUSTOMER_URI,
    body: {
      REF_ID: REF_ID,
    }
  }
}

export const deletedCustomer = (response) =>{
  if(response.status){
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }else{
    return {
      type: ADD_CUSTOMER_COMPLETE
    };
  }
}

export const filterSearch = (CustomerList, SearchString) => {
  if(SearchString == ""){
    return {
      type: UPDATE_AFTER_SEARCH,
      S_CustomerList: CustomerList,
      SEARCH_STRING: ""
    };
  }else{
    let S_CustomerList =[];
    const CSearchString = SearchString.toLowerCase();

    for(let cust in CustomerList){
      const currentCust = CustomerList[cust];
      //console.log(currentCust);
      //console.log(currentCust.MIDDLE_NAME!== undefined);

      if(
        currentCust.FIRST_NAME.toLowerCase().indexOf(CSearchString)>-1
        ||
        (currentCust["MIDDLE_NAME"] !== undefined?currentCust["MIDDLE_NAME"].toLowerCase().indexOf(CSearchString)>-1:false)
        ||
        currentCust.LAST_NAME.toLowerCase().indexOf(CSearchString)>-1
        ||
        currentCust.TRADING_NUM.toLowerCase().indexOf(CSearchString)>-1
        ||
        currentCust.TRADING_NAME.toLowerCase().indexOf(CSearchString)>-1
        ||
        currentCust.LINE_ID.toLowerCase().indexOf(CSearchString)>-1
      ){
        S_CustomerList.push(currentCust);
      }
    }
    return {
      type: UPDATE_AFTER_SEARCH,
      S_CustomerList: S_CustomerList,
      SEARCH_STRING: SearchString,
    };
  }
}
