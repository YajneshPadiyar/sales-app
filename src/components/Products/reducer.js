
import {
  UPDATE_PRODUCT_LIST,
  CHANGE_PRODUCT_NAME,
  CHANGE_PRODUCT_DESC,
} from './constants';

const initialState = {
  PRODUCT_NAME: "",
  PRODUCT_DESC: "",
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
    default:
    return state;
  }
}
