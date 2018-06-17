import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { EMAIL_CHANGE } from './constants';
import { onInputChange, applicationLogin } from './actions';
import {
  emailSelector,
  makeForgetEnable
} from './selectors';

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
  }
});


class ForgotUser extends Component{
  render(){
  //console.log(this.props);
    return (
      <Grid
      container
      justify="center"
      //className={this.props.classes.wrapper}
      >
      <Paper className={this.props.classes.paper} >
      <Grid
        container
        className={this.props.classes.root}
        spacing={16}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          variant="title"
          gutterBottom
          color="primary"
        >
          Reset Password
        </Typography>
          <TextField
            id="Email"
            label="Email Address"
            onChange={this.props.onChange(EMAIL_CHANGE)}
            margin="normal"
            type="email"
            value={this.props.EMAIL}
          />
          <Button
            disabled={!this.props.canEnable}
            variant="contained"
            color="primary"
            onClick={this.props.onReset(this.props.EMAIL)}
          >
          Reset Password
          </Button>
      </Grid>
      </Paper>
      </Grid>
    );
  }
}

ForgotUser.propTypes = {
  EMAIL: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  EMAIL: emailSelector(),
  canEnable: makeForgetEnable(),
});

const mapDispatchToProps = dispatch => {
  return {
    onChange:(action) => (e) => dispatch( onInputChange ( {type:action,value:e.target.value} ) ),
    onReset: (userName, password) => (e) => dispatch(applicationLogin(userName, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ForgotUser));
