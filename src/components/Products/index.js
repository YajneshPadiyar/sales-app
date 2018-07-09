import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Products extends Component{
  render(){
    return (
      <div>Home</div>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
return {

};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));
