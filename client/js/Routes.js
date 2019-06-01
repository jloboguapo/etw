import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <App location={location}>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <Home history={routeProps.history} />}
        />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
