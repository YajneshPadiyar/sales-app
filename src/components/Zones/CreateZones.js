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

class CreateZones extends Component {
  render() {
    const {classes}=this.props;
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
              type="text"
              />
              <TextField
              id="ZoneAddressDetails"
              label="Zone Address"
              className={classes.textField}
              type="text"
              />
            </Grid>
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                variant="contained"
                className={classes.button}
              >Cancel</Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >Create Zone</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateZones));
