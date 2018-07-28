import { createSelector } from 'reselect';

const orderState = state => state.Order;
const zoneState = state => state.Zones;

export const activeStepSelector = () => createSelector(
  orderState,
  (order) => order.ACTIVE_STEP
);

export const zoneListSelector = () => createSelector(
  zoneState,
  (zone) => zone.ZONE_LIST
);
