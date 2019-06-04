import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <App location={location}>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <Header history={routeProps.history} />}
        />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
