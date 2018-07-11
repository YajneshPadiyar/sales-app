import {
  APPLICATION_LOGIN,
  APPLICATION_LOGOUT,
  LOGIN_URI,
  LOGIN_STATE_CHANGE,
} from '../constants';

import { AUTHENTICATE } from '../../../constants/actionTypes';

 import {
   onInputChange,
   applicationLogin,
   applicationRegister,
   performValidateLogin,
   changeLoginView,
 } from '../actions';


 describe('Login Actions', () => {
   describe('onInputChange', () => {
     it('should return correct type and value', () => {
       const value = 'A';
       const expectedResult = {
         type: LOGIN_STATE_CHANGE,
         VALUE: value,
       };
       const inputData = {
         type: LOGIN_STATE_CHANGE,
         value: value,
       };
       expect(onInputChange(inputData)).toEqual(expectedResult);
     })
   });
 });

  describe('Login Actions', () => {
    describe('applicationLogin', () => {
      it('should return correct type, user name, password, api uri', () => {
        const userName = 'userName';
        const password = 'password';
        const expectedResult = {
          type: AUTHENTICATE,
          USER_NAME : userName,
          PASSWORD : password,
          API_URI: LOGIN_URI
        };
        expect(applicationLogin(userName, password)).toEqual(expectedResult);
      })
    });
  });

  describe('Login Actions', () => {
    describe('applicationRegister', () => {
      it('should return correct type, user name, password, api uri', () => {
        const userName = 'userName';
        const password = 'password';
        const expectedResult = {
          type: AUTHENTICATE,
          USER_NAME : userName,
          PASSWORD : password,
          API_URI: LOGIN_URI
        };
        const inputData = {
          USER_NAME: userName,
          PASSWORD: password
        };
        expect(applicationRegister(inputData)).toEqual(expectedResult);
      })
    });
  });

  describe('Login Actions', () => {
    describe('performValidateLogin', () => {

        let status = true;

        let expectedResult = {
          type: APPLICATION_LOGIN,
          APPLICATION_AUTH: status
        };
        let inputData = {
          status: status
        };

        it('should return correct type and auth status true', () => {
          expect(performValidateLogin(inputData)).toEqual(expectedResult);
        });

        status = false;
        expectedResult = {
          type: APPLICATION_LOGOUT,
          APPLICATION_AUTH: status
        };
        inputData = {
          status: status
        };
        it('should return correct type and auth status false', () => {
          expect(performValidateLogin(inputData)).toEqual(expectedResult);
        });
    });
  });

  describe('Login Actions', () => {
    describe('changeLoginView', () => {
        it('should return type and value', () => {
          const type = 'AUTH';
          const expectedResult ={
            type: LOGIN_STATE_CHANGE,
            VALUE: type
          };
          expect(changeLoginView(type)).toEqual(expectedResult);
        })
    });
  });
