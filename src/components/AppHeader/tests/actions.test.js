import {
  onMenuChange,
  onMenuClick,
} from '../actions';

import { MENU_CHANGE } from '../constants';
import { APP_GOTO_PAGE } from '../../../constants/actionTypes';


describe('AppHeader Action', () => {
  it('onMenuChange', () => {
    const expectedResult = {
      type: MENU_CHANGE,
    };
    expect(onMenuChange()).toEqual(expectedResult);
  });

  it('onMenuClick', () => {
    const path = "/";
    const expectedResult = {
      type: APP_GOTO_PAGE,
      path: path,
    };
    expect(onMenuClick(path)).toEqual(expectedResult);
  });
});
