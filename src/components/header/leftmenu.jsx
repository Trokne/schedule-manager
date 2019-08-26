import React from 'react';
import '../../styles/leftmenu.pcss';
import { NavLink } from 'react-router-dom';

const LeftMenu = () => (
  <div className="menu">
    <NavLink className="menu-item" exact to="/groups">
      Группы
    </NavLink>
  </div>
);
export default LeftMenu;
