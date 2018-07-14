import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  APPLICATION_LOGIN,
  APP_GOTO_PAGE,
  APP_UPDATE_TITLE
} from '../../constants/actionTypes';

import reducer from '../common';

const defaultState = {
  appName: 'Conduit',
  token: null,
  viewChangeCounter: 0
};

describe('common reducer', () => {
  let state = defaultState;
  let expectedResult = state;

  const testCases = [
    {name: 'should return default state', type: undefined, action: {}, additionTestVal: {}},
    {name: APP_LOAD+' token null', type: APP_LOAD, action: {token: null, payload:{user:"U"}}, additionTestVal: {token: null, appLoaded: true, currentUser: "U"}},
    {name: APP_LOAD+' payload null', type: APP_LOAD, action: {token: null, payload:null}, additionTestVal: {token: null, appLoaded: true, currentUser: null}},
    {name: APP_LOAD+' all not null', type: APP_LOAD, action: {token: "A", payload:{user:"U"}}, additionTestVal: {token: "A", appLoaded: true, currentUser: "U"}},
    {name: REDIRECT, type: REDIRECT, action: {}, additionTestVal: {redirectTo: null}},
    {name: LOGOUT, type: LOGOUT, action: {}, additionTestVal: {redirectTo: '/', token: null, currentUser: null}},
    {name: APPLICATION_LOGIN +' success', type: APPLICATION_LOGIN, action: {error: false}, additionTestVal: {redirectTo: '/home'}},
    {name: APPLICATION_LOGIN +' error', type: APPLICATION_LOGIN, action: {error: true}, additionTestVal: {redirectTo: null}},
    {name: LOGIN +' success', type: LOGIN, action: {error: false}, additionTestVal: {redirectTo: '/home'}},
    {name: LOGIN +' error', type: LOGIN, action: {error: true}, additionTestVal: {redirectTo: null}},
    {name: REGISTER +' success', type: REGISTER, action: {error: false}, additionTestVal: {redirectTo: '/home'}},
    {name: REGISTER +' error', type: REGISTER, action: {error: true}, additionTestVal: {redirectTo: null}},
    {name: APP_GOTO_PAGE, type: APP_GOTO_PAGE, action: {path: '/newPath'}, additionTestVal: {redirectTo: '/newPath'}},
    {name: APP_UPDATE_TITLE, type: APP_UPDATE_TITLE, action: {newTitle: 'newTitle'}, additionTestVal: {appName: 'newTitle'}},
  ];

  for(let testCase in testCases){
    const test = testCases[testCase];
    it("should return correct values "+test.name, () => {
      const action = {
        type: test.type,
        ...test.action
      };
      expectedResult = {...state, ...test.additionTestVal};
      expect(reducer(state, action)).toEqual(expectedResult);
    });
  }

});
