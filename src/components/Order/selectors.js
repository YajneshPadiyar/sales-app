import { createSelector } from 'reselect';

const orderState = state => state.Order;

export const activeStepSelector = () => createSelector(
  orderState,
  (order) => order.ACTIVE_STEP
);
