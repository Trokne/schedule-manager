import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/headermenu.pcss';
import Avatar from '../../containers/header/avatar';

const HeaderMenu = props => {
  const { isLogin } = props;
  return (
    <div className="menu">
      {!isLogin ? (
        <Button type="primary">
          <Link to="/auth">Войти</Link>
        </Button>
      ) : (
        <div>
          <Avatar />
        </div>
      )}
    </div>
  );
};

HeaderMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default HeaderMenu;
