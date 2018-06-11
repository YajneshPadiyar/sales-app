import { MENU_CHANGE } from './constants';
import { APP_GOTO_PAGE } from '../../constants/actionTypes';

export const onMenuChange = () => {
  return {type: MENU_CHANGE};
}

export const onMenuClick = (path) => {
  return {type: APP_GOTO_PAGE, path: path};
}
