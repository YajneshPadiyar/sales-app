import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { getProductList } from './actions';

import { PRODUCT_TYPE } from './constants';

const styles = theme => ({
  paper:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    minWidth: 400,
    maxHeight: 300,
    maxWidth: 360,
    overflow: 'scroll',
    overflowX: 'hidden',
  }
});

class ProductList extends Component {
  componentWillMount(){
    this.props.loadProducts({PRODUCT_TYPE: PRODUCT_TYPE});
  }
  render() {
    const ProductListAPI = this.props.ProductList;
    const ProductList = ProductListAPI.map(item=>{
      return (
        <ListItem key={item.REF_ID} divider>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.PRODUCT_NAME}
            secondary={item.PRODUCT_DESCRIPTION}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    });

    const {classes}=this.props;
    return(
      <Paper className={classes.paper}>
        <TextField
          lable="Search Product"
          type="text"
        />
        <List>
          {ProductList}
        </List>
      </Paper>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = state => ({
  ProductList: state.Products.PRODUCT_LIST
});

const mapDispatchToProps = dispatch => {
  return {
    loadProducts:(data)=> dispatch(getProductList(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductList));
