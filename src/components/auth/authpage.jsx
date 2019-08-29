import React, { Fragment, Component } from 'react';
import '../../styles/authpage.pcss';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginTab from '../../containers/authorization/tabs/login';
import RegisterTab from '../../containers/authorization/tabs/register';

class AuthPage extends Component {
  componentDidMount() {
    const { setAuthTabActivity, isLogin, goHome } = this.props;
    setAuthTabActivity(true);
    if (isLogin) goHome();
  }

  render() {
    const { setAuthTabActivity } = this.props;
    const { isAuthSelected } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div className="box">
            <div className="header">
              <NavLink
                onClick={() => setAuthTabActivity(true)}
                className={`tab ${isAuthSelected ? 'selected' : ''}`}
                to="/auth"
              >
                Вход
              </NavLink>
              <NavLink
                onClick={() => setAuthTabActivity(false)}
                className={`tab ${!isAuthSelected ? 'selected' : ''}`}
                to="/auth/register"
              >
                Регистрация
              </NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/auth" component={LoginTab} />
                <Route path="/auth/register" component={RegisterTab} />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

AuthPage.propTypes = {
  isAuthSelected: PropTypes.bool.isRequired,
  setAuthTabActivity: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
  location: PropTypes.any,
  isLogin: PropTypes.bool
};

export default AuthPage;
