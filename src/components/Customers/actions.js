import { UPDATE_CUSTOMER_LIST, GET_CUSTOMER_LIST, GET_CUSTOMER_URI } from './constants';

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
    VALUE: response.CustomerList
  }
}else{
  return {};
}
}

export const getCustomerList = () =>{
  return {
    type: GET_CUSTOMER_LIST,
    API_URI: GET_CUSTOMER_URI,
  }
}
