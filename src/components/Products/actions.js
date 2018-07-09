import {
  GET_PRODUCT_URI,
  GET_PRODUCT_LIST,
  RESET_PRODUCT_FORM,
  UPDATE_PRODUCT_LIST,
} from './constants';

export const getProductList = (data) => {
  return {
    type: GET_PRODUCT_LIST,
    API_URI: GET_PRODUCT_URI,
    body: data,
  }
}

export const updateProductList = (response) => {
  if(response.status){
    return {
      type: UPDATE_PRODUCT_LIST,
      PRODUCT_LIST: response.data.Items
    };
  }else{
    return {
      type: UPDATE_PRODUCT_LIST,
      PRODUCT_LIST: []
    }
  }
}

export const createProductComplete = (response) =>{
  if(response.status){
    return { type: RESET_PRODUCT_FORM};
  }else{
    return { type: RESET_PRODUCT_FORM};
  }
}
