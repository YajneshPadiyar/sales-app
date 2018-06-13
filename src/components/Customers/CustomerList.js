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
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  paper:{
    minWidth: 400
  }
});

class CustomerList extends Component{
  render(){

    const CustomerList = [
      {Key:"1", CustomerName: "Test Name 1", TradingName: "Trading Name 1"},
      {Key:"2", CustomerName: "Test Name 2", TradingName: "Trading Name 2"},
      {Key:"3", CustomerName: "Test Name 3", TradingName: "Trading Name 3"},
      {Key:"4", CustomerName: "Test Name 4", TradingName: "Trading Name 4"},
      {Key:"5", CustomerName: "Test Name 5", TradingName: "Trading Name 5"},
      {Key:"6", CustomerName: "Test Name 6", TradingName: "Trading Name 6"},
      {Key:"7", CustomerName: "Test Name 7", TradingName: "Trading Name 7"},
      {Key:"8", CustomerName: "Test Name 8", TradingName: "Trading Name 8"},
      {Key:"9", CustomerName: "Test Name 9", TradingName: "Trading Name 9"},
      {Key:"10", CustomerName: "Test Name 10", TradingName: "Trading Name 10"},
    ];

    const CustList = CustomerList.map(item=>{
      return (
        <ListItem key={item.key} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.CustomerName}
            secondary={item.TradingName}
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
          type="te"
        />
        <List>
          {CustList}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomerList));
