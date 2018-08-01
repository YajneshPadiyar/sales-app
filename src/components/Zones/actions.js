import {
  GET_ZONE_LIST,
  CREATE_ZONE_URI,
  CREATE_ZONE,
  RESET_ZONE_FORM,
  UPDATE_ZONE_LIST,
  GET_ZONE_URI,
  UPDATE_AFTER_SEARCH,
  CHANGE_LIST_PAGE,
  CHANGE_COMPONENT,
} from './constants';


export const getZoneList = (data) => {
  return {
    type: GET_ZONE_LIST,
    API_URI: GET_ZONE_URI,
    body: data
  }
}

export const onInputChange = (action) => {
  return {
    type: action.type,
    VALUE: action.value
  };
}

export const onCreateZone = (data) => {
  return {
    type: CREATE_ZONE,
    API_URI: CREATE_ZONE_URI,
    body: data
  };
}

export const createZoneComplete = (response) => {
  if(response.status){
    return {
      type: RESET_ZONE_FORM
    }
  }else{
    return {
      type: RESET_ZONE_FORM
    }
  }
}

export const updateZoneList = (response) => {
  if(response.status){
    return {
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: response.data.Items
    }
  }else{
    return {
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: []
    }
  }
}
export const incrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    CurrentPage: currentPage+1
  }
}

export const decrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    CurrentPage: currentPage-1
  }
}

export const filterZone = (ZoneList, SearchString) => {
  if(SearchString = ""){
    return {
      type: UPDATE_AFTER_SEARCH,
      SearchString: SearchString,
      S_ZONE_LIST: ZoneList,
    };
  }else{
    const CSearchString = SearchString.toLowerCase();

    return {
      type: UPDATE_AFTER_SEARCH,
      SearchString: SearchString,
      S_ZONE_LIST: ZoneList,
    };
  }
}

export const getCurrentPageData = (data, currentPage, CurrentPageSize) => {
  return data.slice(currentPage*CurrentPageSize-CurrentPageSize,currentPage*CurrentPageSize);
}

export const changeComponent = (comp) =>{
  return {
    type: CHANGE_COMPONENT,
    COMP: comp,
  };
}
