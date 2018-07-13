import {
    productNameSelector,
    productDescriptionSelector,
} from '../selectors';

describe('products selector', () => {
  const testCases = [
    {name: "productNameSelector", selector: productNameSelector(), testValue: "testValue", select: "PRODUCT_NAME", comp: "Products"},
    {name: "productDescriptionSelector", selector: productDescriptionSelector(), testValue: "testValue", select: "PRODUCT_DESC", comp: "Products"},
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
