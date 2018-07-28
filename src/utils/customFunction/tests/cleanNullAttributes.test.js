import cleanNullAttributes from '../cleanNullAttributes';

describe('clean attributes', () => {

  it('it should return only non empty attributes 1', () => {
    const expectedResult = {
      A: 'a',
      B: 'b',
    };
    const data = {
      ...expectedResult, C: '', D: '',
    };
    expect(cleanNullAttributes(data)).toEqual(expectedResult);
  });

  it('it should return only non empty attributes 2', () => {
    const expectedResult = {
      A: 'a',
      B: 'b',
    };
    const data = {
      ...expectedResult,
    };
    expect(cleanNullAttributes(data)).toEqual(expectedResult);
  });

  it('it should return only non empty attributes 3', () => {
    const expectedResult = {
      A: 'a',
      B: 'b',
    };
    const data = {
      ...expectedResult, C: null, D: undefined
    };
    expect(cleanNullAttributes(data)).toEqual(expectedResult);
  });

});
