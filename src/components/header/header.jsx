import React, { Fragment } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../styles/header.pcss';
import HeadMenu from '../../containers/header/rightmenu';
import LeftMenu from './leftmenu';

const Header = () => (
  <Fragment>
    <div className="header-body">
      <div className="left-part">
        <NavLink exact to="/" className="site-name">
          Менеджер расписаний
        </NavLink>
        <div className="leftMenu">
          <LeftMenu />
        </div>
      </div>
      <HeadMenu />
    </div>
  </Fragment>
);

export default withRouter(Header);
