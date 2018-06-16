import {
  APPLICATION_LOGIN,
  APPLICATION_LOGOUT,
  LOGIN_URI,
  LOGIN_STATE_CHANGE,
 } from './constants';
import { AUTHENTICATE } from '../../constants/actionTypes';

export const onInputChange=(action)=>{
  //console.log(action);
  return {
    type: action.type,
    VALUE: action.value
  }
}

export const applicationLogin = (userName, password) => {
  return {
    type: AUTHENTICATE,
    USER_NAME : userName,
    PASSWORD : password,
    API_URI: LOGIN_URI
  }
}

export const applicationRegister  = (action) => {
  return {
    type: AUTHENTICATE,
    USER_NAME : action.USER_NAME,
    PASSWORD : action.PASSWORD,
    API_URI: LOGIN_URI
  }
}
export const performValidateLogin=(response) =>{
  //console.log("validateLogin");
  //console.log(userName);
  //console.log(password);
  if( response.status){
    return {
      type : APPLICATION_LOGIN,
      APPLICATION_AUTH : true,

    };
  } else {
    return {
      type : APPLICATION_LOGOUT,
      APPLICATION_AUTH : false
    };
  }
}

export const changeLoginView = (type) => {
    return {
      type: LOGIN_STATE_CHANGE,
      VALUE: type
  }
}
