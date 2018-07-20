import {
  CHANGE_FIRST_NAME,
  CHANGE_MIDDLE_NAME,
  CHANGE_LAST_NAME,
  CHANGE_TRADING_NAME,
  CHANGE_ADDRESS,
  CHANGE_TRADE_ACCNT_NAME,
  UPDATE_CUSTOMER_LIST,
  ADD_CUSTOMER_COMPLETE,
  CHANGE_COMPONENT_LIST,
  CHANGE_COMPONENT_ADD,
} from './constants';


const initialState ={
    CompState: CHANGE_COMPONENT_LIST,
    FirstName: "",
    MiddleName: "",
    LastName: "",
    TradingName: "",
    TradeAccntNum: "",
    Address: "",
  CustomerList: [],
}


export default (state=initialState, action) => {
  //console.log(action);
  switch (action.type){
    case CHANGE_FIRST_NAME:
      return {...state, FirstName: action.VALUE};
    case CHANGE_LAST_NAME:
      return {...state, LastName: action.VALUE};
    case CHANGE_MIDDLE_NAME:
      return {...state, MiddleName: action.VALUE};
    case CHANGE_TRADING_NAME:
      return {...state, TradingName: action.VALUE};
    case CHANGE_TRADE_ACCNT_NAME:
      return {...state, TradeAccntNum: action.VALUE};
    case CHANGE_ADDRESS:
      return {...state, Address: action.VALUE};
    case UPDATE_CUSTOMER_LIST:
      return {...state, CustomerList: [...action.VALUE]};
    case ADD_CUSTOMER_COMPLETE:
      return {...state, CompState: CHANGE_COMPONENT_LIST};
    case CHANGE_COMPONENT_ADD:
      return {...state, CompState: CHANGE_COMPONENT_ADD};
    case CHANGE_COMPONENT_LIST:
      return {...state, CompState: CHANGE_COMPONENT_LIST};
    default:
    return state;
  }
}
