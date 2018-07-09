import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { getZoneList } from '../Zones/actions';
import { setZoneId, updateZoneList } from './actions';

import { ZONE_TYPE } from '../Zones/constants';

const styles = theme => ({
  paper:{
    minWidth: 400,
    maxHeight: 670,
    overflow: 'scroll',
    overflowX: 'hidden',
  },
  avatarActive:{
    color: "#FFF",
    backgroundColor: "#000"
  },
  avatarInactive:{
    color: "#C4C4C4",
    backgroundColor: "#FFF"
  },
  activeListItem:{
    backgroundColor: "#D4D4D4"
  }
});

class ZoneList extends Component {
  componentWillMount(){
    this.props.setDefaultZone(this.props.DefaultZone);
    this.props.loadZone({ZONE_TYPE: ZONE_TYPE});
    this.props.updateZoneList(this.props.ZoneList);
  }
  render() {
    const {classes}=this.props;
    const ZoneListAPI = this.props.ZONE_LIST;
    const ZoneList = ZoneListAPI.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider className={item.REF_ID===this.props.HomeZoneId?classes.activeListItem:""}>
          <ListItemAvatar>
            <Avatar onClick={this.props.selectZone(item.REF_ID)} className={item.REF_ID===this.props.HomeZoneId?classes.avatarActive:classes.avatarInactive}>
              <CheckCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.ZONE_NAME}
            secondary={item.ZONE_ADDR}
          />
        </ListItem>
      )
    });

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
  classes: PropTypes.classes
}

const mapStateToProps = state => ({
  ZoneList: state.Zones.ZONE_LIST,
  ZONE_LIST: state.Home.ZONE_LIST,
  DefaultZone: state.Login.DEFAULT_ZONE_ID,
  HomeZoneId: state.Home.ZONE_ID
});

const mapDispatchToProps = dispatch => {
  return {
    loadZone:(data)=> dispatch(getZoneList(data)),
    setDefaultZone: (Ref_Id) => dispatch(setZoneId(Ref_Id)),
    selectZone:(Ref_Id) => (e) => dispatch(setZoneId(Ref_Id)),
    updateZoneList: (ZoneList) => dispatch(updateZoneList(ZoneList)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneList));
