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
