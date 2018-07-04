import { createSelector } from 'reselect';

const customerState = state => state.Customers;
const homeState = state => state.Home;

const zoneIdSelector = () => createSelector(
  homeState,
  (home) => home.ZONE_ID.toString()
);

const firstNameSelector = () => createSelector(
  customerState,
  (customer) => customer.FirstName
)

const middleNameSelector = () => createSelector(
  customerState,
  (customer) => customer.MiddleName
)
const lastNameSelector = () => createSelector(
  customerState,
  (customer) => customer.LastName
)
const tradingNameSelector = () => createSelector(
  customerState,
  (customer) => customer.TradingName
)
const tradingAccntNumSelector = () => createSelector(
  customerState,
  (customer) => customer.TradeAccntNum
)
const addressSelector = () => createSelector(
  customerState,
  (customer) => customer.Address
)


export {
  addressSelector,
  tradingAccntNumSelector,
  tradingNameSelector,
  lastNameSelector,
  middleNameSelector,
  firstNameSelector,
  zoneIdSelector
};
