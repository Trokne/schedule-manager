import React, { Fragment } from 'react';
import '../styles/header.pcss';
import Button from '@material-ui/core/Button';

const Header = () => (
  <Fragment>
    <div className="header-body">
      <div className="site-name">Менеджер расписаний</div>
      <div className="login">
        <Button variant="outlined" className="login-button" color="primary">
          Войти
        </Button>
      </div>
    </div>
  </Fragment>
);

export default Header;
