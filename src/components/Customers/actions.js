import {
  UPDATE_CUSTOMER_LIST,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_URI,
  ADD_CUSTOMER_URI,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER
} from './constants';

export const onInputChange=(action)=>{
  //console.log(action);
  return {
    type: action.type,
    VALUE: action.value
  }
}


export const updateCustomerList = (response) => {
//  console.log(response);
if(response.status){
  return {
    type: UPDATE_CUSTOMER_LIST,
    VALUE: response.data.Items
  }
}else{
  return {};
}
}

export const getCustomerList = () => {
  return {
    type: GET_CUSTOMER_LIST,
    API_URI: GET_CUSTOMER_URI,
    body: {LINE_ID:"A001"}
  }
}

export const addCustomer = (data) => {
  return {
    type: ADD_CUSTOMER,
    API_URI: ADD_CUSTOMER_URI,
    body: data
  }
}

export const addedCustomer = (response) =>{
  console.log(response);
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
