import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import PerformanceSolutions from './components/PerformanceSolutions';
import LeadershipResources from './components/LeadershipResources';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <HomePage history={routeProps.history} />}
        />
        <Route
          exact
          path="/performanceSolutions"
          render={routeProps => (
            <PerformanceSolutions history={routeProps.history} />
          )}
        />
        <Route
          exact
          path="/leadershipResources"
          render={routeProps => (
            <LeadershipResources history={routeProps.history} />
          )}
        />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
