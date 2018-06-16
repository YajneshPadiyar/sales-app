
import {
  USER_NAME_CHANGE,
  PASSWORD_CHANGE,
  PASSWORD_CONFIRM_CHANGE,
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  EMAIL_CHANGE,
  STATE_LOGIN,
  LOGIN_STATE_CHANGE,
} from './constants';

const initialState = {
  USER_NAME: "",
  PASSWORD: "",
  PASSWORD_CONFIRM: "",
  FIRST_NAME: "",
  LAST_NAME: "",
  EMAIL: "",
  COMPONENT_VIEW: STATE_LOGIN
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
    };
    case PASSWORD_CONFIRM_CHANGE:
    return {
      ...state,
      PASSWORD_CONFIRM: action.VALUE
    };
    case FIRST_NAME_CHANGE:
    return {
      ...state,
      FIRST_NAME: action.VALUE
    };
    case LAST_NAME_CHANGE:
    return {
      ...state,
      LAST_NAME: action.VALUE
    };
    case EMAIL_CHANGE:
    return {
      ...state,
      EMAIL: action.VALUE
    };
    case LOGIN_STATE_CHANGE:
    return {
      ...initialState,
      COMPONENT_VIEW: action.VALUE
    };
    default:
    return state;
  }
}
