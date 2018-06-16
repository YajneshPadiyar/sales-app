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

import { USER_NAME_CHANGE, PASSWORD_CHANGE} from './constants';
import { onInputChange, applicationLogin } from './actions';
import {
  userNameSelector,
  passwordSelector,
  makeLoginEnable
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
    marginTop: '20%'
  }
});


class LoginForm extends Component{
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
          Login
        </Typography>
        <TextField
        id="UserName"
        label="User Name"
        onChange={this.props.onChange(USER_NAME_CHANGE)}
        margin="normal"
        value={this.props.USER_NAME}
        />
        <TextField
          id="Password"
          label="Password"
          onChange={this.props.onChange(PASSWORD_CHANGE)}
          margin="normal"
          type="password"
          value={this.props.PASSWORD}
          />
          <Button
            disabled={!this.props.canEnable}
            variant="contained"
            color="primary"
            onClick={this.props.onLogin(this.props.USER_NAME, this.props.PASSWORD)}
          >
          Login
          </Button>
      </Grid>
      </Paper>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  LOGIN_NAME : PropTypes.string,
  PASSWORD : PropTypes.string,
  onChange : PropTypes.func,
  onLogin : PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  USER_NAME: userNameSelector(),
  PASSWORD: passwordSelector(),
  canEnable: makeLoginEnable(),
});

const mapDispatchToProps = dispatch => {
  return {
    onChange:(action)=>(e)=>dispatch(onInputChange({type:action,value:e.target.value})),
    onLogin: (userName, password) => (e) => dispatch(applicationLogin(userName, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));
