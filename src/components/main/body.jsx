import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from './mainpage';
import AuthPage from '../../containers/authorization/authpage';
import Groups from '../../containers/groups/groups';

const Body = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/auth/register" component={AuthPage} />
      <Route exact path="/groups" component={Groups} />
    </Switch>
  </Fragment>
);

export default withRouter(Body);
