
import {
  SET_ZONE_ID,
  UPDATE_ZONE_LIST,
  CHANGE_LIST_PAGE,
  UPDATE_AFTER_SEARCH,
  } from './constants';

export const setZoneId = (Ref_Id) => {
  return {
    type: SET_ZONE_ID,
    value: Ref_Id
  }
}

export const updateZoneList = (ZONE_LIST) => {
  //console.log(ZONE_LIST);
  return {
    type: UPDATE_ZONE_LIST,
    ZONE_LIST: ZONE_LIST,
    S_ZONE_LIST: ZONE_LIST,
  }
}

export const filterZone =(ZoneList, searchString) => {
  if(searchString == ""){
    return {
      type: UPDATE_AFTER_SEARCH,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: [],
      SEARCH_STRING: "",
    }
  }else{
    let s_Zone_List = [];
    for(let zone in ZoneList){
      const currentZone = ZoneList[zone];
      //console.log(currentZone.ZONE_NAME.toLowerCase());
      //console.log(searchString.toLowerCase());
      //console.log(currentZone.ZONE_NAME.toLowerCase().indexOf(searchString.toLowerCase()));

      if(
        currentZone.ZONE_NAME.toLowerCase().indexOf(searchString.toLowerCase())>-1
        ||
        currentZone.REF_ID.toString().toLowerCase().indexOf(searchString.toLowerCase())>-1
        ||
        currentZone.ZONE_ADDR.toLowerCase().indexOf(searchString.toLowerCase())>-1
      ){
          s_Zone_List.push(currentZone);
          //console.log(currentZone);
      }
      //console.log(currentZone);
    }
    return {
      type: UPDATE_AFTER_SEARCH,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: s_Zone_List,
      SEARCH_STRING: searchString,
    }
  }
}


export const incrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    VALUE: currentPage+1,
  }
}

export const decrementPage = (currentPage) => {
  return {
    type: CHANGE_LIST_PAGE,
    VALUE: currentPage-1,
  }
}

export const getCurrentPageData = (data, currentPage, CurrentPageSize) => {
  //console.log(data);
  //console.log(currentPage);
  //console.log(CurrentPageSize);
  return data.slice(currentPage*CurrentPageSize-CurrentPageSize,currentPage*CurrentPageSize);
}
