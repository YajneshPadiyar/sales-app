import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//mport Button from '@material-ui/core/Button';

import { STATE_LOGIN, STATE_FORGOT, STATE_REGISTER } from './constants';
import { changeLoginView } from './actions';
import LoginForm from './LoginForm';
import RegisterUser from './RegisterUser';
import ForgotUser from './ForgotUser';


const styles = theme => ({
  anchor: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    marginRight: 5,
    '&:hover':{
      textDecoration: "underline",
      fontWeight: "bold",
    }
  }
});


class Login extends Component{

  render(){
    const viewType = this.props.ComponentView;
    const {classes} = this.props;
    //console.log(viewType===STATE_LOGIN);
    //console.log(viewType);
    //console.log(STATE_LOGIN);
    //console.log(this.props);
  const switchComponentView = (type) => {
    switch (type){
      case STATE_LOGIN:
        return (<LoginForm/>);
      case STATE_FORGOT:
        return <ForgotUser/>;
      case STATE_REGISTER:
        return <RegisterUser/>;
      default:
        return <LoginForm/>;
    }
  }
    return (
      <Grid
      container
      justify="center"
      //className={this.props.classes.wrapper}
      >
      {switchComponentView(viewType)}
      <span
        className={classes.anchor}
        onClick={this.props.loginViewChange(STATE_FORGOT)}
        hidden={viewType === STATE_FORGOT}
      >Forgot Password</span>
      <span
        className={classes.anchor}
        onClick={this.props.loginViewChange(STATE_REGISTER)}
        hidden={viewType === STATE_REGISTER}
      >Register user</span>
      <span
        className={classes.anchor}
        onClick={this.props.loginViewChange(STATE_LOGIN)}
        hidden={viewType === STATE_LOGIN}
      >Login</span>
      </Grid>
    );
  }
}

Login.propTypes = {
  ComponentView: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  ComponentView: state.Login.COMPONENT_VIEW
});

const mapDispatchToProps = dispatch => {
  return {
    loginViewChange: (type) => (e) => dispatch(changeLoginView(type))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
