
import {
  CHANGE_ZONE_ADDR,
  CHANGE_ZONE_NAME,
  RESET_ZONE_FORM,
  UPDATE_ZONE_LIST
} from './constants';

const initialState = {
  ZONE_NAME: "",
  ZONE_ADDR: "",
  ZONE_LIST: []
};


export default (state=initialState, action) => {
  switch (action.type){
    case CHANGE_ZONE_NAME:
    return {...state, ZONE_NAME: action.VALUE};
    case CHANGE_ZONE_ADDR:
    return {...state, ZONE_ADDR: action.VALUE};
    case RESET_ZONE_FORM:
    return {...state, ZONE_NAME: "", ZONE_ADDR: ""};
    case UPDATE_ZONE_LIST:
    return {...state, ZONE_LIST: action.ZONE_LIST}
    default:
    return state;
  }
}
