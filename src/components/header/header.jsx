import React, { Fragment } from 'react';
import '../../styles/header.pcss';
import HeadMenu from '../../containers/headermenu';

const Header = () => (
  <Fragment>
    <div className="header-body">
      <div className="site-name">Менеджер расписаний</div>
      <HeadMenu className="menu" />
    </div>
  </Fragment>
);

export default Header;
