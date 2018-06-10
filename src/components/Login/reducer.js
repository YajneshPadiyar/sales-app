
import {
  USER_NAME_CHANGE,
  PASSWORD_CHANGE,
  APPLICATION_LOGIN
} from './constants';

const initialState = {
  USER_NAME: "",
  PASSWORD: ""
}
export default (state=initialState, action) => {
  switch (action.type){
    case USER_NAME_CHANGE:
    return {
      ...state,
      USER_NAME: action.VALUE
    };
    case PASSWORD_CHANGE:
    return {
      ...state,
      PASSWORD: action.VALUE
    }
    default:
    return state;
  }
}
