import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import PerformanceSolutions from './components/PerformanceSolutions';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <Home history={routeProps.history} />}
        />
        <Route
          exact
          path="/performanceSolutions"
          render={routeProps => (
            <PerformanceSolutions history={routeProps.history} />
          )}
        />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
