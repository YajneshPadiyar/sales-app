import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sales extends Component {
  render() {
    return(
      <div>Sales Page</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
