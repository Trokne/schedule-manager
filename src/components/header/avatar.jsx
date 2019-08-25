import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';

class Avatar extends React.PureComponent {
  render() {
    const { login, isOpenedPopup, changePopupVisibility, logout } = this.props;
    const logoutButton = (
      <Button
        type="link"
        onClick={() => {
          logout();
          changePopupVisibility(false);
        }}
      >
        Выйти
      </Button>
    );
    return (
      <Fragment>
        <Popover
          content={logoutButton}
          trigger="click"
          visible={isOpenedPopup}
          onVisibleChange={changePopupVisibility}
        >
          <Button type="primary" shape="round" icon="login" size="default">
            {login}
          </Button>
        </Popover>
      </Fragment>
    );
  }
}

Avatar.propTypes = {
  login: PropTypes.string.isRequired,
  isOpenedPopup: PropTypes.bool.isRequired,
  changePopupVisibility: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Avatar;
