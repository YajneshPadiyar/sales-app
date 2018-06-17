import { createSelector } from 'reselect';

const loginState = state => state.Login;


const userNameSelector = () => createSelector(
  loginState,
  (login) => login.USER_NAME
)

const passwordSelector = () => createSelector(
  loginState,
  (login) => login.PASSWORD
)
const passwordConfirmSelector = () => createSelector(
  loginState,
  (login) => login.PASSWORD_CONFIRM
)
const firstNameSelector = () => createSelector(
  loginState,
  (login) => login.FIRST_NAME
)
const lastNameSelector = () => createSelector(
  loginState,
  (login) => login.LAST_NAME
)
const emailSelector = () => createSelector(
  loginState,
  (login) => login.EMAIL
)

const makeLoginEnable = () => createSelector(
  loginState,
  (login) => {
    const a = login.USER_NAME.length>0;
    const b = login.PASSWORD.length>0;
    return (a && b) ?  true : false;
  }
)

const makeRegisterEnable = () => createSelector(
  loginState,
  (login) => {
    const a = login.USER_NAME.length>0;
    const b = login.FIRST_NAME.length>0;
    const c = login.LAST_NAME.length>0;
    const d = login.EMAIL.length>0;
    const e = login.PASSWORD.length>0;
    const f = login.PASSWORD_CONFIRM.length>0;
    return (a && b && c && d && e && f) ? true : false;
  }
)

const makeForgetEnable = () => createSelector(
  loginState,
  (login) => {
    const a = login.EMAIL.length>0;
    return a;
  }
)
export {
  userNameSelector,
  passwordSelector,
  makeLoginEnable,
  passwordConfirmSelector,
  firstNameSelector,
  lastNameSelector,
  emailSelector,
  makeRegisterEnable,
  makeForgetEnable,
};
