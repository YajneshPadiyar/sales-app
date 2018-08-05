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
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {
  getZoneList,
  filterZone,
  incrementPage,
  decrementPage,
  getCurrentPageData,
  changeComponent,
  editZone,
} from './actions';

import {
  ZONE_TYPE,
  COMP_ZONE_ADD,
  COMP_ZONE_EDIT,
} from './constants';

import {
  zoneListSelector,
  currentPageSelector,
  currentPageSizeSelector,
  filteredZoneList,
} from './selectors';

const styles = theme => ({
  paper:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minWidth: 400,
    maxHeight: 670,
    overflow: 'hidden',
    overflowX: 'hidden',
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

class ZoneList extends Component {
  componentWillMount(){
    this.props.loadZone({ZONE_TYPE: ZONE_TYPE});
  }
  render() {
    //console.log(this.props);
    const ZoneListAPI = this.props.ZoneList;
    const CurrentPage = this.props.CurrentPage;
    const CurrentPageSize = this.props.CurrentPageSize;
    const S_ZONE_LIST = this.props.S_ZONE_LIST;
    const currentZoneList = getCurrentPageData(S_ZONE_LIST, CurrentPage, CurrentPageSize);
    const ZoneList = currentZoneList.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.ZONE_NAME+", "+item.REF_ID}
            secondary={item.ZONE_ADDR}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete"
              onClick={this.props.onEditZone(item)}
            >
              <EditIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    });

    const {classes}=this.props;
    return(
      <Paper className={classes.paper}>
        <div>
          <Button variant="fab" color="primary" aria-label="Add"
            className={ classes.fab }
            onClick= {this.props.onChangeComp(COMP_ZONE_ADD)}
          >
            <AddIcon />
          </Button>
        </div>
        <TextField
          lable="Search Zone"
          type="text"
          onChange={this.props.onFilterSearch(ZoneListAPI)}
        />
        <List>
          {ZoneList}
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
            disabled={CurrentPage*CurrentPageSize>=ZoneListAPI.length}
            size='small'
          >
            Next
          </Button>
        </div>
      </Paper>
    );
  }
}

ZoneList.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps  = createStructuredSelector({
  ZoneList: zoneListSelector(),
  CurrentPage: currentPageSelector(),
  CurrentPageSize: currentPageSizeSelector(),
  S_ZONE_LIST: filteredZoneList(),
});

//console.log(mapStateToProps());
const mapDispatchToProps = dispatch => {
  return {
    loadZone:(data)=> dispatch(getZoneList(data)),
    onFilterZone: (ZoneList) => dispatch(filterZone(ZoneList)),
    onIncrement: (CurrentPage) => (e) => dispatch(incrementPage(CurrentPage)),
    onDecrement: (CurrentPage) => (e) => dispatch(decrementPage(CurrentPage)),
    onChangeComp: (comp) => (e) => dispatch(changeComponent(comp)),
    onFilterSearch: (ZoneList) => (e) => dispatch(filterZone(ZoneList, e.target.value)),
    onEditZone: (item) => (e) => dispatch(editZone(item)),
  }
};
//console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneList));
