import {
  addressSelector,
  tradingAccntNumSelector,
  tradingNameSelector,
  lastNameSelector,
  middleNameSelector,
  firstNameSelector,
  zoneIdSelector
} from '../selectors';

describe('customer selectors', () =>{

  const testCases = [
    {name: "addressSelector", selector: addressSelector(), testValue: "testValue", select: "Address", comp: "Customers"},
    {name: "tradingAccntNumSelector", selector: tradingAccntNumSelector(), testValue: "testValue", select: "TradeAccntNum", comp: "Customers"},
    {name: "tradingNameSelector", selector: tradingNameSelector(), testValue: "testValue", select: "TradingName", comp: "Customers"},
    {name: "lastNameSelector", selector: lastNameSelector(), testValue: "testValue", select: "LastName", comp: "Customers"},
    {name: "middleNameSelector", selector: middleNameSelector(), testValue: "testValue", select: "MiddleName", comp: "Customers"},
    {name: "firstNameSelector", selector: firstNameSelector(), testValue: "testValue", select: "FirstName", comp: "Customers"},
    {name: "zoneIdSelector", selector: zoneIdSelector(), testValue: "testValue", select: "ZONE_ID", comp: "Home"},
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
});
