
import {
  STEP_SELECT_ZONE,
  STEP_SELECT_PRODUCTS,
  STEP_CAPTURE_CUSTOMER,
} from './constants';

export const getSteps = () =>{
  return ([STEP_SELECT_ZONE, STEP_CAPTURE_CUSTOMER,STEP_SELECT_PRODUCTS]);
}

export const getStepContent = (step) => {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

export const stepAction = (type) => {
  return {type: type};
}
