import { createSelector } from 'reselect';

const zoneState = state => state.Zones;

const zoneNameSelector = () => createSelector(
  zoneState,
  (zone) => zone.ZONE_NAME
);

const zoneAddressSelector = () => createSelector(
  zoneState,
  (zone) => zone.ZONE_ADDR
);


export {
  zoneNameSelector,
  zoneAddressSelector
};
