import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { USER_NAME_CHANGE, PASSWORD_CHANGE} from './constants';
import { onInputChange, applicationLogin } from './actions';


class Login extends Component{
  render(){
  console.log(this.props);
    return (

      <div>
        <input
          type="text"
          onChange={this.props.onChange(USER_NAME_CHANGE)}
        />
        <input
          type="password"
          onChange={this.props.onChange(PASSWORD_CHANGE)}
        />
        <button onClick={this.props.onLogin(this.props.USER_NAME, this.props.PASSWORD)}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  LOGIN_NAME : PropTypes.string,
  PASSWORD : PropTypes.string,
  onChange : PropTypes.func,
  onLogin : PropTypes.func
}

const mapStateToProps = (state) => ({...state.Login});

const mapDispatchToProps = dispatch => {
  return {
    onChange:(action)=>(e)=>dispatch(onInputChange({type:action,value:e.target.value})),
    onLogin: (userName, password) => (e) => {
      console.log(userName);
      console.log(password);
      dispatch(applicationLogin(userName, password))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
