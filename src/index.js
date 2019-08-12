import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configs/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>Test</Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);
