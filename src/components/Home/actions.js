
import { SET_ZONE_ID, UPDATE_ZONE_LIST } from './constants';

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
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: [],
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
      type: UPDATE_ZONE_LIST,
      ZONE_LIST: ZoneList,
      S_ZONE_LIST: s_Zone_List,
    }
  }
}
