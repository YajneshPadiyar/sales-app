import {
  CHANGE_FIRST_NAME,
  CHANGE_MIDDLE_NAME,
  CHANGE_LAST_NAME,
  CHANGE_TRADING_NAME,
  CHANGE_ADDRESS,
  CHANGE_TRADE_ACCNT_NAME,
  UPDATE_CUSTOMER_LIST
} from './constants';


const initialState ={
  FirstName: "",
  MiddleName: "",
  LastName: "",
  TradingName: "",
  TradeAccntNum: "",
  Address: "",
  CustomerList: [],
}


export default (state=initialState, action) => {

  switch (action.type){
    case CHANGE_FIRST_NAME:
      return {...state, FirstName: action.VALUE};
    case CHANGE_LAST_NAME:
      return {...state, LastName: action.VALUE};
    case CHANGE_MIDDLE_NAME:
      return {...state, MiddlName: action.VALUE};
    case CHANGE_TRADING_NAME:
      return {...state, TradingName: action.VALUE};
    case CHANGE_TRADE_ACCNT_NAME:
      return {...state, TradeAccntNumName: action.VALUE};
    case CHANGE_ADDRESS:
      return {...state, Address: action.VALUE};
    case UPDATE_CUSTOMER_LIST:
      return {...state, CustomerList: [...action.VALUE]};
    default:
    return state;
  }
}
