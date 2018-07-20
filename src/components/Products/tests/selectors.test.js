import {
    productNameSelector,
    productDescriptionSelector,
    productWholePriceSelector,
    productRetailPriceSelector,
    enableAddProductSelector,
} from '../selectors';

describe('products selector', () => {
  const testCases = [
    {name: "productNameSelector", selector: productNameSelector(), testValue: "testValue", select: "PRODUCT_NAME", comp: "Products"},
    {name: "productDescriptionSelector", selector: productDescriptionSelector(), testValue: "testValue", select: "PRODUCT_DESC", comp: "Products"},
    {name: "productWholePriceSelector", selector: productWholePriceSelector(), testValue: "testValue", select: "PRODUCT_WHOLE_PRICE", comp: "Products"},
    {name: "productRetailPriceSelector", selector: productRetailPriceSelector(), testValue: "testValue", select: "PRODUCT_RETAIL_PRICE", comp: "Products"},
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

  it('should enable add product', () => {
    const Tselector = enableAddProductSelector();
    const mockedState = {
      Products: {
        PRODUCT_NAME: "A",
        PRODUCT_DESC: "B",
        PRODUCT_WHOLE_PRICE: "C",
        PRODUCT_RETAIL_PRICE: "D",
      }
    };

    expect(Tselector(mockedState)).toBeFalsy();
  });

  it('should disable add product', () => {
    const Tselector = enableAddProductSelector();
    const mockedState = {
      Products: {
        PRODUCT_NAME: "",
        PRODUCT_DESC: "",
        PRODUCT_WHOLE_PRICE: "C",
        PRODUCT_RETAIL_PRICE: "D",
      }
    };

    expect(Tselector(mockedState)).toBeTruthy();
  });

});
