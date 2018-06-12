import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CreateCustomer from './CreateCustomer';
import {onInputChange} from './actions';
const styles = theme => ({});
class Customers extends Component {
  render() {
    const { classes } = this.props;
    return(
      <CreateCustomer/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return{
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Customers));
