import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {
  CHANGE_FIRST_NAME,
  CHANGE_MIDDLE_NAME,
  CHANGE_LAST_NAME,
  CHANGE_TRADING_NAME,
  CHANGE_ADDRESS,
  CHANGE_TRADE_ACCNT_NAME

} from './constants';
import {onInputChange} from './actions';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: 2
  },
  wrapper: {
    minWidth: 600,
  },
  paper: {
    padding: theme.spacing.unit*2,
    minHeight: 200,
    minWidth: 400,
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

class CreateCustomer extends Component{
  render(){
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
              Create Customer
            </Typography>
          </Grid>
          <Divider />
          <Grid
            item
            className={classes.gridItem}
          >
            <TextField
              id="TradingName"
              label="Trading Name"
              className={classes.textField}
              type="text"
              onChange={this.props.onChangeEvent(CHANGE_TRADING_NAME)}
              xs={24}
            />
            <TextField
              id="TradingId"
              label="TAN"
              className={classes.textField}
              type="text"
              onChange={this.props.onChangeEvent(CHANGE_TRADE_ACCNT_NAME)}
              xs={24}
            />
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
          <TextField
            id="FirstName"
            label="First Name"
            className={classes.textField}
            type="text"
            onChange={this.props.onChangeEvent(CHANGE_FIRST_NAME)}
            xs={8}
          />
          <TextField
            id="MiddleName"
            label="Middle Name"
            className={classes.textField}
            type="text"
            onChange={this.props.onChangeEvent(CHANGE_MIDDLE_NAME)}
            xs={8}
          />
          <TextField
            id="LastName"
            label="Last Name"
            className={classes.textField}
            type="text"
            onChange={this.props.onChangeEvent(CHANGE_LAST_NAME)}
            xs={8}
          />
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <TextField
              id="Address"
              label="Address"
              type="text"
              onChange={this.props.onChangeEvent(CHANGE_ADDRESS)}
            />
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Button variant="contained"     className={classes.button}>
              Cancle
            </Button>
            <Button variant="contained" color="primary"   className={classes.button}>
              Create Customer
            </Button>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
    );
  }
}


const mapStateToProps = state => ({...state.Customers});

const mapDispatchToProps = dispatch => {
  return{
    onChangeEvent: (type) => (e) => dispatch(onInputChange({type: type, value:e.target.value}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateCustomer));
