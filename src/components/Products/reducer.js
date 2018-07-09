
import {
  UPDATE_PRODUCT_LIST
} from './constants';

const initialState = {
  PRODUCT_LIST:[]
}

export default (state=initialState, action) => {
  switch (action.type){
    case UPDATE_PRODUCT_LIST:
    return {...state, PRODUCT_LIST: action.PRODUCT_LIST};
    default:
    return state;
  }
}
