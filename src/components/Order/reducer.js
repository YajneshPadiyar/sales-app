
import {
  ORDER_NEXT_STEP,
  ORDER_CANCEL_STEP,
  ORDER_PREVIOUS_STEP,
} from './constants';

const initialState = {
  ACTIVE_STEP: 0
}

export default (state=initialState, action) => {
  switch (action.type){
    case ORDER_NEXT_STEP:
    return {...state, ACTIVE_STEP: state.ACTIVE_STEP+1};
    case ORDER_CANCEL_STEP:
    return  initialState ;
    case ORDER_PREVIOUS_STEP:
    return {...state, ACTIVE_STEP: state.ACTIVE_STEP-1};
    default:
    return state;
  }
}
