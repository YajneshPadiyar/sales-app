import { MENU_CHANGE, MENU_CLICK } from './constants';

const initialState = {
  isMenuOpen: false
};

export default (state=initialState, action) => {
  switch (action.type){
    case MENU_CHANGE:
      return {...state, isMenuOpen: !state.isMenuOpen};
    default:
      return state;
  }
}
