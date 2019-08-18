import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './mainpage';
import AuthPage from '../containers/auth/authpage';

const Body = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/auth" component={AuthPage} />
    </Switch>
  </Fragment>
);

export default Body;
