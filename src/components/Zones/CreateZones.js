import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {
  zoneNameSelector,
  zoneAddressSelector
} from './selectors';

import {
  CHANGE_ZONE_ADDR,
  CHANGE_ZONE_NAME,
  ZONE_TYPE,
  STATUS_ACTIVE,
  COMP_ZONE_LIST,
} from './constants';

import {
  onInputChange,
  onCreateZone,
  changeComponent,
} from './actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    minWidth: 600,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    minWidth: 400,
    minHeight: 200,
    marginTop: '10%'
  },
  gridItem: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    paddingTop: "0 !important",
    paddingBottom: "0 !important"
  },
  textField: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit
  },
  typography: {
    margin: theme.spacing.unit,
  }
});

class CreateZone extends Component {
  render() {
    const {classes}=this.props;
    //console.log(this.props);
    return(
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={24}
      >
        <Paper className={classes.paper}>
          <Grid
            container
            spacing={24}
            direction="column"
          >
            <Grid
              item
              className={classes.gridItem}
            >
              <Typography
                variant="title"
                gutterBottom
                color="primary"
              >
                Create Zone
              </Typography>
            </Grid>
            <Divider />
            <Grid
              item
              className={classes.gridItem}
            >
              <TextField
              id="ZoneName"
              label="Zone Name"
              className={classes.textField}
              onChange={this.props.onChangeEvent(CHANGE_ZONE_NAME)}
              type="text"
              value={this.props.ZONE_NAME}
              />
              <TextField
              id="ZoneAddressDetails"
              label="Zone Address"
              className={classes.textField}
              onChange={this.props.onChangeEvent(CHANGE_ZONE_ADDR)}
              type="text"
              value={this.props.ZONE_ADDR}
              />
            </Grid>
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.props.onCancel}
              >Cancel</Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.onCreateZone({
                  ZONE_NAME: this.props.ZONE_NAME,
                  ZONE_ADDR: this.props.ZONE_ADDR,
                  ZONE_TYPE: ZONE_TYPE,
                  CREATED: new Date(),
                  STATUS: STATUS_ACTIVE
                })}
              >Create Zone</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

CreateZone.propTypes= {
  ZONE_NAME: PropTypes.string,
  ZONE_ADDR: PropTypes.string,
}

const mapStateToProps = createStructuredSelector ({
  ZONE_NAME: zoneNameSelector(),
  ZONE_ADDR: zoneAddressSelector()
});

const mapDispatchToProps = dispatch => {
  return{
    onChangeEvent: (type) => (e) => dispatch(onInputChange({type: type, value:e.target.value})),
    onCreateZone: (data) => (e) => dispatch(onCreateZone(data)),
    onCancel: (e) => dispatch(changeComponent(COMP_ZONE_LIST)),
  }
};

//console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateZone));
