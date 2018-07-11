import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {
  productNameSelector,
  productDescriptionSelector
} from './selectors';

import {
  CHANGE_PRODUCT_DESC,
  CHANGE_PRODUCT_NAME,
  PRODUCT_TYPE,
  STATUS_ACTIVE
} from './constants';

import {
  onInputChange,
  onAddProduct
} from './actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    minWidth: 600,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    minWidth: 400,
    minHeight: 200,
    marginTop: '10%'
  },
  gridItem: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    paddingTop: "0 !important",
    paddingBottom: "0 !important"
  },
  textField: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit
  },
  typography: {
    margin: theme.spacing.unit,
  }
});

class AddProduct extends Component {
  render() {
    const {classes}=this.props;
    //console.log(this.props);
    return(
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={24}
      >
        <Paper className={classes.paper}>
          <Grid
            container
            spacing={24}
            direction="column"
          >
            <Grid
              item
              className={classes.gridItem}
            >
              <Typography
                variant="title"
                gutterBottom
                color="primary"
              >
                Create Zone
              </Typography>
            </Grid>
            <Divider />
            <Grid
              item
              className={classes.gridItem}
            >
              <TextField
              id="ProductName"
              label="Product Name"
              className={classes.textField}
              onChange={this.props.onChangeEvent(CHANGE_PRODUCT_NAME)}
              type="text"
              value={this.props.PRODUCT_NAME}
              />
              <TextField
              id="ProdDescDetails"
              label="Product Description"
              className={classes.textField}
              onChange={this.props.onChangeEvent(CHANGE_PRODUCT_DESC)}
              type="text"
              value={this.props.PRODUCT_DESC}
              />
            </Grid>
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                variant="contained"
                className={classes.button}
              >Cancel</Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.onCreateProduct({
                  PRODUCT_NAME: this.props.PRODUCT_NAME,
                  PRODUCT_DESC: this.props.PRODUCT_DESC,
                  PRODUCT_TYPE: PRODUCT_TYPE,
                  CREATED: new Date(),
                  STATUS: STATUS_ACTIVE
                })}
              >Add Product</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

AddProduct.propTypes= {
  PRODUCT_NAME: PropTypes.string,
  PRODUCT_DESC: PropTypes.string,
}

const mapStateToProps = createStructuredSelector ({
  PRODUCT_NAME: productNameSelector(),
  PRODUCT_DESC: productDescriptionSelector()
});

const mapDispatchToProps = dispatch => {
  return{
    onChangeEvent: (type) => (e) => dispatch(onInputChange({type: type, value:e.target.value})),
    onCreateProduct: (data) => (e) => dispatch(onAddProduct(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProduct));
