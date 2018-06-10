import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component{
  render(){
    return (
      <div>
      <span>Home</span>
      <button onClick={this.props.buttonClick}>Goto Login Page</button>
      </div>

    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
return {
  buttonClick : (e) => {
    dispatch({type: "REDIRECT", "reDirect": "/login"})
  }
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
