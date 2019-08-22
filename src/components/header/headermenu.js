import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/headermenu.pcss';

const HeaderMenu = props => {
  const { isLogin } = props;
  return (
    <div className="menu">
      {!isLogin ? (
        <Button type="primary">
          <Link to="/auth">Войти</Link>
        </Button>
      ) : (
        'Авторизация ещё не готова!'
      )}
    </div>
  );
};

HeaderMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

export default HeaderMenu;
