import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';

const Routes = () => {
  return (
    <div data-testid="routes">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
