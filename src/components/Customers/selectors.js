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

const getCurrentCustomerSelector = () => createSelector(
  customerState,
  (customer) => customer.EditCustomer
)

const getREF_IDSelector = () => createSelector(
  customerState,
  (customer) => customer.REF_ID
)

const enableCreateCustomer = () => createSelector(
  customerState, homeState,
  (customer, home) => {
    //console.log(home);
    const a = customer.FirstName.length>0;
    const b = customer.LastName.length>0;
    const c = customer.Address.length>0;
    const d = customer.TradingName.length>0;
    const e = customer.TradeAccntNum.length>0;
    const f = home.ZONE_ID.toString().length>0;
    return !(a && b && c && d && e && f);
  }
)


export {
  getREF_IDSelector,
  getCurrentCustomerSelector,
  addressSelector,
  tradingAccntNumSelector,
  tradingNameSelector,
  lastNameSelector,
  middleNameSelector,
  firstNameSelector,
  zoneIdSelector,
  enableCreateCustomer,
  getCompStateSelector,
};
