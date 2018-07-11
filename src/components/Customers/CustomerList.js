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
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
//import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import { getCustomerList } from './actions';

const styles = theme => ({
  paper:{
    minWidth: 400,
    maxHeight: 670,
    overflow: 'scroll',
    overflowX: 'hidden',
  }
});

class CustomerList extends Component{

  componentWillMount(){
    this.props.loadCustomer;
  }

  render(){

    const CustListAPI = this.props.CustomerList;

    const CustList = CustListAPI.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.FIRST_NAME+" "+item.LAST_NAME}
            secondary={item.TRADING_NUM+":"+item.TRADING_NAME+", "+item.LINE_ID}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
    const {classes}=this.props;
    return (
      <Paper className ={classes.paper}>
        <TextField
          label="Search Customer"
          type="text"
        />
        <List>
          {CustList}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => (
  {CustomerList : state.Customers.CustomerList}
);


const mapDispatchToProps = dispatch => {
  return {
    loadCustomer: dispatch(getCustomerList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomerList));
