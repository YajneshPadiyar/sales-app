import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { getZoneList } from './actions';

import { ZONE_TYPE } from './constants';

const styles = theme => ({
  paper:{
    minWidth: 400,
    maxHeight: 670,
    overflow: 'scroll',
    overflowX: 'hidden',
  }
});

class ZoneList extends Component {
  componentWillMount(){
    this.props.loadZone({ZONE_TYPE: ZONE_TYPE});
  }
  render() {
    const ZoneListAPI = this.props.ZoneList;
    const ZoneList = ZoneListAPI.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.ZONE_NAME}
            secondary={item.ZONE_ADDR}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    });

    const {classes}=this.props;
    return(
      <Paper className={classes.paperr}>
        <TextField
          lable="Search Zone"
          type="text"
        />
        <List>
          {ZoneList}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  ZoneList: state.Zones.ZONE_LIST
});

const mapDispatchToProps = dispatch => {
  return {
    loadZone:(data)=> dispatch(getZoneList(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneList));
