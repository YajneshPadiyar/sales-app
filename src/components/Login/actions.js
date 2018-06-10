import { APPLICATION_LOGIN, APPLICATION_LOGOUT } from './constants';
import { AUTHENTICATE } from '../../constants/actionTypes';

export const onInputChange=(action)=>{
  console.log(action);
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
    error: false,
  }
}


export const performValidateLogin=(userName, password) =>{
  console.log("validateLogin");
  console.log(userName);
  console.log(password);
  if( userName === "A"){
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
