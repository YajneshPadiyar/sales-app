import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {
  HOME_PAGE_PATH,
  CUSTOMER_PAGE_PATH,
  DEFAULT_PATH,
  SALES_PAGE_PATH,
  ZONE_PAGE_PATH,
  ORDER_PAGE_PATH
} from '../../constants/actionTypes';

const Items = () => {
  return ([
    { name: "Home", key: "Home", icon: <InboxIcon />, path: HOME_PAGE_PATH},
    { name: "Order", key: "Order", icon: <InboxIcon />, path: ORDER_PAGE_PATH},
    //{ type: "Divider", key: "FirstSection" },
    { name: "Customers", key: "Customers", icon: <InboxIcon />, path: CUSTOMER_PAGE_PATH },
    { name: "Sales List", key: "Sales", icon: <InboxIcon />, path: SALES_PAGE_PATH },
    { name: "Zones", key: "Zones", icon: <InboxIcon />, path: ZONE_PAGE_PATH },
    { type: "Divider", key: "DecondSection"},
    { name: "Logout", key: "Logout", icon: <InboxIcon />, path: DEFAULT_PATH}
  ]);
};

const MenuItems = Items();

export {MenuItems};
