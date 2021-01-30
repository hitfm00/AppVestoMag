import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import NotFound from '../NotFound/404';
import ProductPage from '../ProductPage/ProductPage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/product/:id" component={ProductPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routers;
