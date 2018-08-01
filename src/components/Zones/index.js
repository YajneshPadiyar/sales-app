import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CreateZones from './CreateZones';
import ZoneList from './ZoneList';

import {
  COMP_ZONE_ADD,
  COMP_ZONE_EDIT,
} from './constants';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing.unit*2,
    minHeight: 200,
    minWidth: 400,
  },
  gridItem: {
    padding: theme.spacing.unit*2
  }
});

class Zones extends Component {
  render() {
    const {classes,currentComp}=this.props;

    this.displayComp = (type) =>{
      switch(type){
        case COMP_ZONE_EDIT:
        return ;
        case COMP_ZONE_ADD:
        return <CreateZones/>;
        default:
        return <ZoneList/>;
      }
    }

    return(
      <Grid
        container
        justify="center"
        className={classes.root}
        direction="row"
      >
        <Grid className={classes.gridItem}>
          {this.displayComp(this.props.currentComp)}
        </Grid>
      </Grid>
    );
  }
}

Zones.propTypes = {
  classes: PropTypes.object
}
const mapStateToProps = state => ({
  currentComp: state.Zones.COMP_STATE,
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Zones));
