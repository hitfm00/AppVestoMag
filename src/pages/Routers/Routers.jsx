import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import NotFound from '../NotFound/404';
const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routers;
