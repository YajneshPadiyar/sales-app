import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ZoneList from './ZoneList';

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

class Home extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={24}
        direction="row"
      >
        <Grid className={classes.gridItem}>
          <ZoneList/>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
}
const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
return {
  buttonClick : (e) => {
    dispatch({type: "REDIRECT", "reDirect": "/login"})
  }
};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
