import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CreateCustomer from './CreateCustomer';
import CustomerList from './CustomerList';
import EditCustomer from './EditCustomer';
//import {onInputChange} from './actions';

import {
  CHANGE_COMPONENT_ADD,
  CHANGE_COMPONENT_EDIT,
} from './constants';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing.unit*2,
    minHeight: 200,
    minWidth: 400,
  },
  gridItem: {
    padding: theme.spacing.unit*2
  }

});
class Customers extends Component {
  render() {
    const { classes } = this.props;
    //console.log(this.props);
    this.displayComp = (type) =>{
      switch(type){
        case CHANGE_COMPONENT_EDIT:
        return <EditCustomer/>;
        case CHANGE_COMPONENT_ADD:
        return <CreateCustomer/>;
        default:
        return <CustomerList/>;
      }
    }
    return(

      <Grid
        container
        className={classes.root}
        direction="row"
        justify="center"
      >
        <Grid item className={classes.gridItem}>
          {this.displayComp(this.props.CompState)}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  CompState: state.Customers.CompState
});

const mapDispatchToProps = dispatch => {
  return{

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Customers));
