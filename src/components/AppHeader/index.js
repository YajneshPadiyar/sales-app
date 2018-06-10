import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
//import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';
import ApplicationMenu from '../ApplicationMenu/ApplicationMenu';

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
              onClick={this.OpenApplicaitonMenu}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title is too big to be displayed on smalle
            </Typography>
          </Toolbar>
        </AppBar>
        <ApplicationMenu openMenu={this.state.openMenu} menuHandler={this.OpenApplicaitonMenu}/>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
