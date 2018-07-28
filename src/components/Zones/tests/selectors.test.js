import {
    zoneNameSelector,
    zoneAddressSelector,
    zoneListSelector
} from  '../selectors';

describe('zones selector', () => {
  const testCases = [
    {name: "zoneNameSelector", selector: zoneNameSelector(), testValue: "testValue", select: "ZONE_NAME", comp: "Zones"},
    {name: "zoneAddressSelector", selector: zoneAddressSelector(), testValue: "testValue", select: "ZONE_ADDR", comp: "Zones"},
    {name: "zoneListSelector", selector: zoneListSelector(), testValue: "testValue", select: "ZONE_LIST", comp: "Zones"},
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
