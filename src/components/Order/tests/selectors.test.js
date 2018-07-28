import {
  activeStepSelector,
  zoneListSelector
} from '../selectors';

describe('order selector', () => {
  const testCases = [
    {name: "activeStepSelector", selector: activeStepSelector(), testValue: "testValue", select: "ACTIVE_STEP", comp: "Order"},
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
