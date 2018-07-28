import {
  userNameSelector,
  passwordSelector,
  makeLoginEnable,
  passwordConfirmSelector,
  firstNameSelector,
  lastNameSelector,
  emailSelector,
  makeRegisterEnable,
  makeForgetEnable,
} from '../selectors';

//TODO: complete the test script
describe('login selector', () => {
  const testCases = [
    {name: "userNameSelector", selector: userNameSelector(), testValue: "testValue", select: "USER_NAME", comp: "Login"},
    {name: "passwordSelector", selector: passwordSelector(), testValue: "testValue", select: "PASSWORD", comp: "Login"},
    {name: "passwordConfirmSelector", selector: passwordConfirmSelector(), testValue: "testValue", select: "PASSWORD_CONFIRM", comp: "Login"},
    {name: "firstNameSelector", selector: firstNameSelector(), testValue: "testValue", select: "FIRST_NAME", comp: "Login"},
    {name: "lastNameSelector", selector: lastNameSelector(), testValue: "testValue", select: "LAST_NAME", comp: "Login"},
    {name: "emailSelector", selector: emailSelector(), testValue: "testValue", select: "EMAIL", comp: "Login"},
  ];

  for(let testCase in testCases){
    const test = testCases[testCase];
    it("should return "+test.name, ()=>{
      const Tselector = test.selector;
      const expectedResult = test.testValue;
      const mockedState = {
        [test.comp]:{
          [test.select]: expectedResult
        }
      };
      expect(Tselector(mockedState)).toEqual(expectedResult);
    });
  }

  it("makeLoginEnable enable", () => {
    const Tselector = makeLoginEnable();
    const expectedResult = true;
    const mockedState = {
      Login: {
        USER_NAME: "A",
        PASSWORD: "B"
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });

  it("makeLoginEnable disable", () => {
    const Tselector = makeLoginEnable();
    const expectedResult = false;
    const mockedState = {
      Login: {
        USER_NAME: "",
        PASSWORD: "B"
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });

  it("makeRegisterEnable enable", () => {
    const Tselector = makeRegisterEnable();
    const expectedResult = true;
    const mockedState = {
      Login: {
        USER_NAME: "A",
        PASSWORD: "B",
        FIRST_NAME: "C",
        LAST_NAME: "D",
        EMAIL: "E",
        PASSWORD_CONFIRM: "F",
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });

  it("makeRegisterEnable diable", () => {
    const Tselector = makeRegisterEnable();
    const expectedResult = false;
    const mockedState = {
      Login: {
        USER_NAME: "A",
        PASSWORD: "B",
        FIRST_NAME: "C",
        LAST_NAME: "",
        EMAIL: "E",
        PASSWORD_CONFIRM: "F",
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });

  it("makeForgetEnable enable", () => {
    const Tselector = makeForgetEnable();
    const expectedResult = true;
    const mockedState = {
      Login: {
        EMAIL: "E",
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });

  it("makeForgetEnable enable", () => {
    const Tselector = makeForgetEnable();
    const expectedResult = false;
    const mockedState = {
      Login: {
        EMAIL: "",
      }
    };
    expect(Tselector(mockedState)).toEqual(expectedResult);
  });
});
