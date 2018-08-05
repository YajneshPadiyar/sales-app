import { createSelector } from 'reselect';

const zoneState = state => state.Zones;

export const zoneNameSelector = ()=> createSelector(
  zoneState,
  (zone) => zone.ZONE_NAME
);

export const zoneAddressSelector = () => createSelector(
  zoneState,
  (zone) => zone.ZONE_ADDR
);

export const zoneListSelector = () => createSelector(
  zoneState,
  (zone) => zone.ZONE_LIST
);

export const currentPageSelector = () => createSelector(
  zoneState,
  (zone) => zone.CURRENT_PAGE
);

export const currentPageSizeSelector = () => createSelector(
  zoneState,
  (zone) => zone.CURRENT_PAGE_SIZE
);

export const currentCompSelector = () => createSelector(
  zoneState,
  (zone) => zone.COMP_STATE
);

export const filteredZoneList = () => createSelector(
  zoneState,
  (zone) => zone.S_ZONE_LIST
);

export const zoneRefIdSelector = () => createSelector(
  zoneState,
  (zone) => zone.REF_ID
);
