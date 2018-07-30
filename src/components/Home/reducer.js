
import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST,
  CHANGE_LIST_PAGE,
  UPDATE_AFTER_SEARCH,
} from './constants';

const initialState = {
  ZONE_ID: "",
  ZONE_LIST: [],
  S_ZONE_LIST: [],
  CurrentPage: 1,
  CurrentPageSize: 8,
  SearchString: "",
};

export default (state=initialState, action) => {
  switch (action.type){
    case SET_ZONE_ID:
    return {...state,
      ZONE_ID: action.value,
      ZONE_LIST: [...state.ZONE_LIST]
      };
    case UPDATE_ZONE_LIST:
    return {...state,
      ZONE_LIST: action.ZONE_LIST,
      S_ZONE_LIST: action.S_ZONE_LIST,
    };
    case CHANGE_LIST_PAGE:
    return {
      ...state, CurrentPage: action.VALUE
    }
    case UPDATE_AFTER_SEARCH:
    return  {
      ...state,
      SearchString: action.SEARCH_STRING,
      ZONE_LIST: action.ZONE_LIST,
      S_ZONE_LIST: action.S_ZONE_LIST,
    };
    default:
    return state;
  }
}
