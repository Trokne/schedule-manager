import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/headermenu.pcss';

const HeaderMenu = props => {
  const { isLogin, logout } = props;
  return (
    <div className="menu">
      {!isLogin ? (
        <Button type="primary">
          <Link to="/auth">Войти</Link>
        </Button>
      ) : (
        <Button type="primary" onClick={logout}>
          Выйти
        </Button>
      )}
    </div>
  );
};

HeaderMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default HeaderMenu;
