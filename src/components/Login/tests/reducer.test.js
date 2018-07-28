

import {
  USER_NAME_CHANGE,
  PASSWORD_CHANGE,
  PASSWORD_CONFIRM_CHANGE,
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  EMAIL_CHANGE,
  STATE_LOGIN,
  LOGIN_STATE_CHANGE,
} from '../constants';

import {
  onInputChange,
  applicationLogin,
  applicationRegister,
  performValidateLogin,
  changeLoginView,
} from '../actions';

import reducer from '../reducer';

const initialState = {
  USER_NAME: "",
  PASSWORD: "",
  PASSWORD_CONFIRM: "",
  FIRST_NAME: "",
  LAST_NAME: "",
  EMAIL: "",
  DEFAULT_ZONE_ID: 1002,
  COMPONENT_VIEW: STATE_LOGIN
};

describe('Login Reducer', () => {
    let state = initialState;
    let expectedResult = state
    it('should return the initial sate', () => {
      expect(reducer(undefined, {})).toEqual(expectedResult);
    });

    const testCases = [
      { CaseName: 'USER_NAME', testValue: "testValue", type: USER_NAME_CHANGE,},
      { CaseName: 'PASSWORD', testValue: "testValue", type: PASSWORD_CHANGE,},
      { CaseName: 'PASSWORD_CONFIRM', testValue: "testValue", type: PASSWORD_CONFIRM_CHANGE,},
      { CaseName: 'FIRST_NAME', testValue: "testValue", type: FIRST_NAME_CHANGE,},
      { CaseName: 'LAST_NAME', testValue: "testValue", type: LAST_NAME_CHANGE,},
      { CaseName: 'EMAIL', testValue: "testValue", type: EMAIL_CHANGE,},
      { CaseName: 'COMPONENT_VIEW', testValue: "testValue", type: LOGIN_STATE_CHANGE,},
    ];

    for(let testCase in testCases) {
      const test = testCases[testCase];
      const TestName = 'should update '+ test.CaseName;
      //console.log(testCases[test]);
      it( TestName, () =>{
        const testValue = test.testValue;
        expectedResult = {...state, [test.CaseName]: test.testValue };
        const type = test.type;
        const action = {
          type: type,
          value: testValue
        };
        //console.log(action);
        expect(reducer(state, onInputChange(action))).toEqual(expectedResult);
      });
    }
});
