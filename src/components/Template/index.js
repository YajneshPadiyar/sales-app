import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component{
  render(){
    return (
      <div>Home</div>
    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
return {

};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
