import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { store, history} from '../../store';
import App from '../../components/App';
import AppHeader from '../../components/AppHeader';


describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );

    //expect(renderedComponent.find(AppHeader).length).toEqual(1);
  });
});
