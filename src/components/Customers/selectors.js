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

const getCompStateSelector = () => createSelector(
  customerState,
  (customer) => customer.CompState
)

const enableCreateCustomer = () => createSelector(
  customerState,
  (customer) => {
    const a = customer.FirstName.length>0;
    const b = customer.LastName.length>0;
    const c = customer.Address.length>0;
    const d = customer.TradingName.length>0;
    const e = customer.TradeAccntNum.length>0;
    return !(a && b && c && d && e );
  }
)


export {
  addressSelector,
  tradingAccntNumSelector,
  tradingNameSelector,
  lastNameSelector,
  middleNameSelector,
  firstNameSelector,
  zoneIdSelector,
  enableCreateCustomer,
  getCompStateSelector
};
