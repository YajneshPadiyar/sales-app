
import {
  STEP_SELECT_ZONE,
  STEP_SELECT_PRODUCTS,
  STEP_CAPTURE_CUSTOMER,
} from './constants';

export const getSteps = () =>{
  return ([STEP_SELECT_ZONE, STEP_CAPTURE_CUSTOMER,STEP_SELECT_PRODUCTS]);
}

export const stepAction = (type) => {
  return {type: type};
}
