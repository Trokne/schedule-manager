import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './mainpage';
import AuthPage from '../containers/auth/authpage';

const Body = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/auth/" component={AuthPage} />
      <Route exact path="/auth/register" component={AuthPage} />
    </Switch>
  </Fragment>
);

export default Body;
