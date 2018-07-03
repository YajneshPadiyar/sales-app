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

import { APP_HEADER_TITLE_LIST } from './constants';

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
    //console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              //hidden={!this.props.authStatus}
              onClick={this.props.menuClick}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {APP_HEADER_TITLE_LIST[this.props.pathname]}
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
  pathname: PropTypes.string.isRequired
};

const mapStatesToProps = state => (
  {...state.AppHeader,
    pathname: state.router.location.pathname,
    authStatus: false
  }

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
