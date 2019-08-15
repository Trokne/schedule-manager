import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../../styles/headermenu.pcss';
import { Link } from 'react-router-dom';

const HeaderMenu = props => {
  const { isLogin } = props;
  return (
    <div className="menu">
      {!isLogin ? (
        <Button
          variant="outlined"
          className="login-button"
          color="primary"
          component={Link}
          to="/auth"
        >
          Войти
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
