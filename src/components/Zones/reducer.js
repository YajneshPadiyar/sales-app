
import {
  CHANGE_ZONE_ADDR,
  CHANGE_ZONE_NAME,
  RESET_ZONE_FORM,
  UPDATE_ZONE_LIST,
  UPDATE_AFTER_SEARCH,
  CHANGE_LIST_PAGE,
  CHANGE_COMPONENT,
  COMP_ZONE_LIST,
  COMP_ZONE_EDIT,
  COMP_ZONE_ADD,
} from './constants';

const initialState = {
  ZONE_NAME: "",
  ZONE_ADDR: "",
  REF_ID: "",
  ZONE_LIST: [],
  S_ZONE_LIST: [],
  CURRENT_PAGE: 1,
  CURRENT_PAGE_SIZE: 8,
  SEARCH_STRING: "",
  COMP_STATE: COMP_ZONE_LIST,
};


export default (state=initialState, action) => {
  switch (action.type){
    case CHANGE_ZONE_NAME:
    return {...state, ZONE_NAME: action.VALUE};
    case CHANGE_ZONE_ADDR:
    return {...state, ZONE_ADDR: action.VALUE};
    case RESET_ZONE_FORM:
    return {
      ...state,
      ZONE_NAME: "",
      ZONE_ADDR: "",
      REF_ID: "",
      COMP_STATE: COMP_ZONE_LIST,
    };
    case UPDATE_ZONE_LIST:
    return {
      ...state,
      ZONE_LIST: action.ZONE_LIST,
      S_ZONE_LIST: action.ZONE_LIST,
    }
    case UPDATE_AFTER_SEARCH:
    return{
      ...state,
      SEARCH_STRING: action.SearchString,
      S_ZONE_LIST: action.S_ZONE_LIST,
    }
    case CHANGE_LIST_PAGE:
    return {
      ...state,
      CURRENT_PAGE: action.CurrentPage,
    }
    case CHANGE_COMPONENT:
      switch(action.COMP){
        case COMP_ZONE_ADD:
          return{
              ...state,
              ZONE_NAME: "",
              ZONE_ADDR: "",
              REF_ID: "",
              COMP_STATE: action.COMP,
          };
        case COMP_ZONE_EDIT:
          return{
              ...state,
              ZONE_NAME: action.ZONE_NAME,
              ZONE_ADDR: action.ZONE_ADDR,
              REF_ID: action.REF_ID,
              COMP_STATE: action.COMP,
          };
        default:{
          return {
            ...state,
            COMP_STATE: action.COMP,
          }
        }
      };
    default:
    return state;
  }
}
