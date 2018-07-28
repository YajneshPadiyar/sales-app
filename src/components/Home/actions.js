
import { SET_ZONE_ID, UPDATE_ZONE_LIST } from './constants';

export const setZoneId = (Ref_Id) => {
  return {
    type: SET_ZONE_ID,
    value: Ref_Id
  }
}

export const updateZoneList = (ZONE_LIST) => {
  return {
    type: UPDATE_ZONE_LIST,
    ZONE_LIST: ZONE_LIST
  }
}
