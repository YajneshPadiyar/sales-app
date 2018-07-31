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
  CHANGE_COMPONENT_EDIT,
  CHANGE_LIST_PAGE,
  EDIT_CUSTOMER,
  UPDATE_AFTER_SEARCH,
} from './constants';


const initialState ={
    CompState: CHANGE_COMPONENT_LIST,
    FirstName: "",
    MiddleName: "",
    LastName: "",
    TradingName: "",
    TradeAccntNum: "",
    Address: "",
    CurrentPage: 1,
    CurrentPageSize: 8,
    CustomerList: [],
    S_CustomerList: [],
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
      return {
        ...state,
        CustomerList: [...action.VALUE],
        S_CustomerList: [...action.VALUE],
      };
    case ADD_CUSTOMER_COMPLETE:
      return {...state,
        CompState: CHANGE_COMPONENT_LIST};
    case CHANGE_COMPONENT_ADD:
      return {...state,
        FirstName: "",
        MiddleName: "",
        LastName: "",
        TradingName: "",
        TradeAccntNum: "",
        Address: "",
        CompState: CHANGE_COMPONENT_ADD
      };
    case CHANGE_COMPONENT_LIST:
      return {...state, CompState: CHANGE_COMPONENT_LIST};
    case CHANGE_LIST_PAGE:
      return {...state, CurrentPage: action.VALUE};
    case EDIT_CUSTOMER:
      //console.log(action.VALUE)
      return {...state,
        FirstName: action.VALUE.FirstName,
        MiddleName: action.VALUE.MiddleName,
        LastName: action.VALUE.LastName,
        TradingName: action.VALUE.TradingName,
        TradeAccntNum: action.VALUE.TradeAccntNum,
        Address: action.VALUE.Address,
        REF_ID: action.VALUE.REF_ID,
        ZONE_ID: action.VALUE.LINE_ID,
        CompState: CHANGE_COMPONENT_EDIT,
        };
    case UPDATE_AFTER_SEARCH:
      return{
        ...state,
        S_CustomerList: action.S_CustomerList,
        SearchString: action.SEARCH_STRING,
      };
    default:
    return state;
  }
}
