import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
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

import { zoneListSelector } from './selectors';

const styles = theme => ({
  paper:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    minWidth: 400,
    maxHeight: 300,
    maxWidth: 360,
    overflow: 'scroll',
    overflowX: 'hidden',
  }
});

class ZoneList extends Component {
  componentWillMount(){
    this.props.loadZone({ZONE_TYPE: ZONE_TYPE});
  }
  render() {
    //console.log(this.props);
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
      <Paper className={classes.paper}>
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

ZoneList.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps  = createStructuredSelector({
  ZoneList: zoneListSelector()
});

//console.log(mapStateToProps());
const mapDispatchToProps = dispatch => {
  return {
    loadZone:(data)=> dispatch(getZoneList(data))
  }
};
console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneList));
