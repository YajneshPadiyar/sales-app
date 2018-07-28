import {
  zoneIdSelector
} from '../selectors';

describe('home selector', () => {
  const testCases = [
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
