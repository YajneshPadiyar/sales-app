import React, { Component } from 'react';
import { connect } from 'react-redux';

class Customers extends Component {
  render() {
    return(
      <div>Customers Page</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
