import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  }
});

class ApplicationMenu extends Component {
  constructor(props)  {
    super(props);
    //const { classes } = props;
    this.state = {
      openMenu: this.props.openMenu,

    };
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  OnMenuItemClick = (event) => {
    alert("Selected MenuItem is ");
    console.log(event);
    this.setState({openMenu: false});
    this.props.menuHandler();
  }

  DockerRequestHandler = (event) =>{
    this.setState({openMenu:this.state.openMenu});
    this.props.menuHandler();
  }
  render () {
    //const { classes } = this.props;
    //console.log(classes);
    //const { anchor, open } = this.state;

    const MenuItems = [
      { name: "Home", key: "Home", icon: <InboxIcon /> },
      //{ type: "Divider", key: "FirstSection" },
      { name: "Customers", key: "Customers", icon: <InboxIcon /> },
      { name: "Sales List", key: "Sales", icon: <InboxIcon /> },
      { name: "Customers", key: "Customers1", icon: <InboxIcon /> },
      { type: "Divider", key: "DecondSection"},
      { name: "Logout", key: "Logout", icon: <InboxIcon /> }
    ];

    const MenuMap = MenuItems.map( item =>
      (item.type === "Divider" ? <Divider key={item.key} /> :
      <ListItem key={item.key} button onClick={this.OnMenuItemClick}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem>)
    );

    return (
      <Drawer
        variant="temporary"
        anchor={this.state.anchor}
        open={this.state.openMenu}
        onClose={this.DockerRequestHandler}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <List>{MenuMap}</List>
      </Drawer>
    );
  }
}

export default ApplicationMenu;
