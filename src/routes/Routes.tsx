import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
