//import agent from '../agent';
import AppHeader from './AppHeader';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Customers from './Customers';
import Sales from './Sales';
import Zones from './Zones';

import { store } from '../store';
import { push } from 'react-router-redux';

import {
  HOME_PAGE_PATH,
  CUSTOMER_PAGE_PATH,
  DEFAULT_PATH,
  SALES_PAGE_PATH,
  ZONE_PAGE_PATH,
  APP_UPDATE_TITLE
} from '../constants/actionTypes';

import { APP_TITLE_LIST } from './AppHeader/constants';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded=true,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    appPath: state.router.location.pathname
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
    //console.log("Next Props");
    if(nextProps.appPath){
      const newTitle = APP_TITLE_LIST[nextProps.appPath];
      store.dispatch({type:APP_UPDATE_TITLE, newTitle: newTitle});
      document.title = newTitle;
    }//*/
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      //agent.setToken(token);
    }
    document.title = APP_TITLE_LIST[this.props.appPath];
    //this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <AppHeader
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
            <Route exact path={DEFAULT_PATH} component={Login}/>
            <Route path={HOME_PAGE_PATH} component={Home} />
            <Route path={CUSTOMER_PAGE_PATH} component={Customers} />
            <Route path={SALES_PAGE_PATH} component={Sales} />
            <Route path={ZONE_PAGE_PATH} component={Zones} />
            </Switch>
        </div>
      );
    }
    return (
      <div>
        <AppHeader
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
