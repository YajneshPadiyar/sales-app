import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
    USER_NAME_CHANGE,
    PASSWORD_CHANGE,
    FIRST_NAME_CHANGE,
    LAST_NAME_CHANGE,
    PASSWORD_CONFIRM_CHANGE,
    EMAIL_CHANGE,
   } from './constants';
import { onInputChange, applicationRegister } from './actions';
import {
  userNameSelector,
  passwordSelector,
  makeRegisterEnable,
  firstNameSelector,
  lastNameSelector,
  emailSelector,
  passwordConfirmSelector,
} from './selectors';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    minWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit*4,
    minWidth: 400,
    minHeight: 200,
    marginTop: '10%'
  }
});

class RegisterUser extends Component{
  render(){
    const {classes} = this.props;
    //console.log(this.props);
    return (
      <Grid
      container
      justify="center"
      spacing={24}
      //className={this.props.classes.wrapper}
      >
      <Paper className={classes.paper} >
      <Grid
        container
        className={classes.root}
        spacing={16}
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <Typography
          variant="title"
          gutterBottom
          color="primary"
        >
          Register User
        </Typography>

        <TextField
          id="FirstName"
          label="First Name"
          onChange={this.props.onChange(FIRST_NAME_CHANGE)}
          margin="normal"
          //value={this.props.FIRST_NAME}
        />
        <TextField
          id="LastName"
          label="Last Name"
          onChange={this.props.onChange(LAST_NAME_CHANGE)}
          margin="normal"
          //value={this.props.LAST_NAME}
        />
        <TextField
          id="Email"
          label="Email Address"
          onChange={this.props.onChange(EMAIL_CHANGE)}
          margin="normal"
          type="email"
          //value={this.props.LAST_NAME}
        />
        <TextField
          id="UserName"
          label="User Name"
          onChange={this.props.onChange(USER_NAME_CHANGE)}
          margin="normal"
          //value={this.props.USER_NAME}
        />
        <TextField
          id="Password"
          label="Password"
          onChange={this.props.onChange(PASSWORD_CHANGE)}
          margin="normal"
          type="password"
          //value={this.props.PASSWORD}
        />
        <TextField
          id="ConfirmPassword"
          label="Confirm Password"
          onChange={this.props.onChange(PASSWORD_CONFIRM_CHANGE)}
          margin="normal"
          type="password"
          //value={this.props.PASSWORD_CONFIRM}
        />
        <Button
          disabled={!this.props.canEnable}
          variant="contained"
          color="primary"
          onClick={this.props.onRegister(this.props)}
        >
          Register User
        </Button>
      </Grid>
      </Paper>
      </Grid>
    );
  }
}

RegisterUser.propTypes = {
  USER_NAME: PropTypes.string,
  FIRST_NAME: PropTypes.string,
  LAST_NAME: PropTypes.string,
  PASSWORD: PropTypes.string,
  PASSWORD_CONFIRM: PropTypes.string,
  EMAIL: PropTypes.string,
  canEnable: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector ({
  USER_NAME: userNameSelector(),
  FIRST_NAME: firstNameSelector(),
  LAST_NAME: lastNameSelector(),
  PASSWORD: passwordSelector(),
  PASSWORD_CONFIRM: passwordConfirmSelector(),
  EMAIL: emailSelector(),
  canEnable: makeRegisterEnable(),
});

const mapDispatchToProps = dispatch => {return {
  onChange:(action)=>(e)=>dispatch(onInputChange({type:action,value:e.target.value})),
  onRegister: (action) => (e) => dispatch(applicationRegister(action)),
}};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegisterUser));
