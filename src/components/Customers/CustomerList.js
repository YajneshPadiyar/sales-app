import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
//import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import {
  getCustomerList,
  changeComponentView,
  getCurrentPageData,
  decrementPage,
  incrementPage,
  editCustomer,
} from './actions';

import {
  CHANGE_COMPONENT_ADD
} from './constants';



const styles = theme => ({
  paper:{
    minWidth: 400,
    maxHeight: 670,
    //overflow: 'scroll',
    overflowX: 'hidden',
    position: 'relative',
    padding: theme.spacing.unit * 1,
  },
  fab: {
    position: 'absolute',
    top: theme.spacing.unit * 1,
    right: theme.spacing.unit * 1,
  },
  button: {
    width: "45%",
    margin: theme.spacing.unit * 1,
  }
});

class CustomerList extends Component{

  componentWillMount(){
    console.log(this.props.ZoneID);
    this.props.loadCustomer(this.props.ZoneID);
  }

  render(){

    const CustListAPI = this.props.CustomerList;
    const CurrentPage = this.props.CurrentPage;
    const CurrentPageSize = this.props.CurrentPageSize;
    const CurrentPageData = getCurrentPageData(CustListAPI, CurrentPage, CurrentPageSize);
    const getCustomerName = (FN, MN, LN) =>{
      if(MN === undefined){
        return FN+" "+LN;
      }else{
        return FN+" "+MN+" "+LN;
      }
    }
    const CustList = CurrentPageData.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              getCustomerName(item.FIRST_NAME, item.MIDDLE_NAME, item.LAST_NAME)
            }
            secondary={item.TRADING_NUM+":"+item.TRADING_NAME+", "+item.LINE_ID}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit"
              onClick={this.props.EditCustomer(item)}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
    const {classes}=this.props;
    return (
      <Paper className ={classes.paper}>
        <div>
          <Button variant="fab" color="primary" aria-label="Add"
            className={classes.button, classes.fab}
            onClick= {this.props.showAddCustomer()}
          >
            <AddIcon />
          </Button>
        </div>
        <TextField
          label="Search Customer"
          type="text"
        />
        <List>
          {CustList}
        </List>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.props.onDecrement(CurrentPage)}
            color="primary"
            disabled={CurrentPage===1}
            size='small'
          >
            Previous
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.props.onIncrement(CurrentPage)}
            color="primary"
            disabled={CurrentPage*CurrentPageSize>=CustListAPI.length}
            size='small'
          >
            Next
          </Button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => (
  {
    CustomerList : state.Customers.CustomerList,
    CurrentPage: state.Customers.CurrentPage,
    CurrentPageSize: state.Customers.CurrentPageSize,
    ZoneID: state.Home.ZONE_ID,
  }
);


const mapDispatchToProps = dispatch => {
  return {
    loadCustomer: (ZoneID) => dispatch(getCustomerList(ZoneID)),
    showAddCustomer: () => (e) => dispatch(changeComponentView(CHANGE_COMPONENT_ADD)),
    onDecrement: (currentPage) => (e) => dispatch(decrementPage(currentPage)),
    onIncrement: (currentPage) => (e) => dispatch(incrementPage(currentPage)),
    EditCustomer: (currCustomer) => (e) => dispatch(editCustomer(currCustomer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomerList));
