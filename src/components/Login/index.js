import React, {Component} from 'react';
import { connect } from 'react-redux';
import { USER_NAME_CHANGE, PASSWORD_CHANGE} from './constants';
import { onInputChange } from './actions';

class Login extends Component{
  render(){
  console.log(this.props);
    return (

      <div>
        <input
          type="text"
          onChange={(e)=>this.props.onChange({type:USER_NAME_CHANGE, value:e.target.value})}
        />
        <input
          type="password"
          onChange={(e)=>this.props.onChange({type:PASSWORD_CHANGE, value:e.target.value})}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({...state.Login});

const mapDispatchToProps = dispatch => {
return {
  onChange:(action)=>dispatch(onInputChange(action))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
