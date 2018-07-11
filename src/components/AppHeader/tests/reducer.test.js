import { MENU_CHANGE } from '../constants';

import reducer from '../reducer';

import { onMenuChange } from '../actions';

const initialState = {
  isMenuOpen: false
};

describe('AppHeader Reducer', () => {
  let state = initialState;
  let expectedResult = state;
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should update isMenuOpen true', () => {
    expectedResult = {...state , isMenuOpen: !state.isMenuOpen};
    expect(reducer(state, onMenuChange())).toEqual(expectedResult);
  });

  it('should update isMenuOpen false', () => {
    expectedResult = {...state , isMenuOpen: !state.isMenuOpen};
    expect(reducer(state, onMenuChange())).toEqual(expectedResult);
  });
});
