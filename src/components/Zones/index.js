import React, { Component } from 'react';
import { connect } from 'react-redux';

class Zones extends Component {
  render() {
    return(
      <div>Zones Page</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Zones);
