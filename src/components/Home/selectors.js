import { createSelector } from 'reselect';

const homeState = state => state.Home;

const zoneIdSelector = () => createSelector(
  homeState,
  (home) => home.ZONE_ID
);


export {
  zoneIdSelector
};
