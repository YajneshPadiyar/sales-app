import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  APPLICATION_LOGIN,
  APP_GOTO_PAGE,
  APP_UPDATE_TITLE,
} from '../constants/actionTypes';

//import {persistor} from '../store';

const defaultState = {
  appName: 'Sales App',
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null };
    case APPLICATION_LOGIN:
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/home',
        //token: action.error ? null : action.payload.user.token,
        //currentUser: action.error ? null : action.payload.user
      };
    case APP_GOTO_PAGE:
    return {
      ...state,
      redirectTo: action.path
    };
    case APP_UPDATE_TITLE:
    return {
      ...state,
      appName: action.newTitle
    }
    default:
      return state;
  }
};
