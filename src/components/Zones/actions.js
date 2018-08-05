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
  COMP_ZONE_EDIT,
  DELETE_ZONE,
  DELETE_ZONE_URI,
  UPDATE_ZONE,
  UPDATE_ZONE_URI,
  ZONE_TYPE,
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

  if(SearchString === ""){
    return {
      type: UPDATE_AFTER_SEARCH,
      SearchString: SearchString,
      S_ZONE_LIST: ZoneList,
    };
  }else{
    const CSearchString = SearchString.toLowerCase();
    const ResultArray = [];
    for(let zone in ZoneList){
      const currentZone = ZoneList[zone];
      if(
        currentZone.ZONE_NAME.toLowerCase().indexOf(CSearchString)>-1
        ||
        currentZone.ZONE_ADDR.toLowerCase().indexOf(CSearchString)>-1
        ||
        currentZone.REF_ID.toString().toLowerCase().indexOf(CSearchString)>-1
      ){
        ResultArray.push(currentZone);
      }
    }
    return {
      type: UPDATE_AFTER_SEARCH,
      SearchString: SearchString,
      S_ZONE_LIST: ResultArray,
    };
  }
};

export const getCurrentPageData = (data, currentPage, CurrentPageSize) => {
  return data.slice(currentPage*CurrentPageSize-CurrentPageSize,currentPage*CurrentPageSize);
};

export const changeComponent = (comp) =>{
  return {
    type: CHANGE_COMPONENT,
    COMP: comp,
  };
};

export const editZone = (currentZone) => {
  return {
    type: CHANGE_COMPONENT,
    ZONE_NAME: currentZone.ZONE_NAME,
    ZONE_ADDR: currentZone.ZONE_ADDR,
    REF_ID: currentZone.REF_ID,
    COMP: COMP_ZONE_EDIT,
  };
}

export const onDeleteZone = (REF_ID) => {
  return {
    type: DELETE_ZONE,
    API_URI: DELETE_ZONE_URI,
    body: {
      REF_ID: REF_ID,
      ZONE_TYPE: ZONE_TYPE,
    }
  }
}

export const deletedZone = (response) => {
  if(response.status) {
    return {
      type: RESET_ZONE_FORM,
    }
  }else{
    return {
      type: RESET_ZONE_FORM,
    }
  }
}

export const updateZone = (key, request) => {
  return {
    type: UPDATE_ZONE,
    API_URI: UPDATE_ZONE_URI,
    body: {
      REF_ID: key.REF_ID,
      ZONE_TYPE: key.ZONE_TYPE,
      data: request,
    }
  }
}

export const updatedZone = (response) => {
  if(response.status) {
    return {
      type: RESET_ZONE_FORM,
    }
  }else{
    return {
      type: RESET_ZONE_FORM,
    }
  }
}
