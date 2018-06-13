import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CreateCustomer from './CreateCustomer';
import CustomerList from './CustomerList';
import {onInputChange} from './actions';
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
    return(
      <Grid
        container
        className={classes.root}
        spacing={24}
        direction="row"
        justify="center"
      >
        <Grid item className={classes.gridItem}>
          <CustomerList/>
        </Grid>
        <Grid item className={classes.gridItem}>
          <CreateCustomer/>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return{

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Customers));
