
import {
  UPDATE_PRODUCT_LIST,
  CHANGE_PRODUCT_NAME,
  CHANGE_PRODUCT_DESC,
  CHANGE_WHOLE_PRICE,
  CHANGE_RETAIL_PRICE,
} from './constants';

const initialState = {
  PRODUCT_NAME: "",
  PRODUCT_DESC: "",
  PRODUCT_WHOLE_PRICE: 0,
  PRODUCT_RETAIL_PRICE:  0,
  PRODUCT_LIST:[],
}

export default (state=initialState, action) => {
  switch (action.type){
    case UPDATE_PRODUCT_LIST:
    return {...state, PRODUCT_LIST: action.PRODUCT_LIST};
    case CHANGE_PRODUCT_NAME:
    return {...state, PRODUCT_NAME: action.VALUE};
    case CHANGE_PRODUCT_DESC:
    return {...state, PRODUCT_DESC: action.VALUE};
    case CHANGE_WHOLE_PRICE:
    return {...state, PRODUCT_WHOLE_PRICE: action.VALUE};
    case CHANGE_RETAIL_PRICE:
    return {...state, PRODUCT_RETAIL_PRICE: action.VALUE};
    default:
    return state;
  }
}
