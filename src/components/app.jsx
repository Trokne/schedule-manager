import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import Header from './header/header';
import Body from './body';

const App = () => (
  <Fragment>
    <Header />
    <Body />
  </Fragment>
);

export default hot(App);
