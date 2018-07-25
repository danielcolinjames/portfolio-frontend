import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Home from './containers/Home';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

export default () => (
  <Switch>
    <Route exact path="/login/" component={Login} />
    <PrivateRoute path="/" component={Home}/>
  </Switch>
);
