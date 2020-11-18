import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthProvider from 'contexts/AuthProvider';
import useAuthProvider from 'hooks/useAuthProvider';
import NotFound from 'pages/NotFound';

const PrivateRoute = ({ component, ...options }: RouteProps) => {
  const { user } = useAuthProvider();
  const redirect = user ? component : Login;
  return <Route {...options} component={redirect} />;
};

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <PrivateRoute path="/dashboard" component={Home} />
          <Route path="/sigin" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routes;
