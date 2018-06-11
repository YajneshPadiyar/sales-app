import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ApplicationMenu from '../ApplicationMenu';
import { onMenuChange, onMenuClick } from './actions';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



class AppHeader extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    openMenu: false,
  };

  OpenApplicaitonMenu = (event) => {
    this.setState({openMenu: !this.state.openMenu});
  }

  render() {
    const { classes } = this.props;
    //const { auth, anchorEl } = this.state;
    //const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.props.menuClick}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title is too big to be displayed on smalle
            </Typography>
          </Toolbar>
        </AppBar>
        <ApplicationMenu openMenu={this.props.isMenuOpen} menuHandler={this.props.menuHandler}/>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStatesToProps = state => (
  {...state.AppHeader}
);
const mapDispatchToProps = dispatch => {
  return {
      menuHandler: (path) => {
        dispatch(onMenuChange());
        dispatch(onMenuClick(path));
        console.log(path);
      },
      menuClick: (e) => dispatch(onMenuChange())
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(withStyles(styles)(AppHeader));
