import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.pcss';
import HeadMenu from '../../containers/headermenu';

const Header = () => (
  <Fragment>
    <div className="header-body">
      <NavLink exact to="/" className="site-name">
        Менеджер расписаний
      </NavLink>
      <HeadMenu className="menu" />
    </div>
  </Fragment>
);

export default Header;
