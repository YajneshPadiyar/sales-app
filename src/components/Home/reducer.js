
import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST } from './constants';

const initialState = {
  ZONE_ID: "",
  ZONE_LIST: []
};

export default (state=initialState, action) => {
  switch (action.type){
    case SET_ZONE_ID:
    return {...state,
      ZONE_ID: action.value,
      ZONE_LIST: [...state.ZONE_LIST]
      };
    case UPDATE_ZONE_LIST:
    return {...state, ZONE_LIST: action.ZONE_LIST};
    default:
    return state;
  }
}
