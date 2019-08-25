import React, { Fragment, Component } from 'react';
import '../../styles/authpage.pcss';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../containers/auth/authtab';
import Register from '../../containers/auth/registertab';

class AuthPage extends Component {
  componentDidMount() {
    const { setAuthActivity, isLogin, goHome } = this.props;
    setAuthActivity(true);
    if (isLogin) goHome();
  }

  render() {
    const { setAuthActivity } = this.props;
    const { isAuthSelected } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div className="box">
            <div className="header">
              <NavLink
                onClick={() => setAuthActivity(true)}
                className={`tab ${isAuthSelected ? 'selected' : ''}`}
                to="/auth"
              >
                Вход
              </NavLink>
              <NavLink
                onClick={() => setAuthActivity(false)}
                className={`tab ${!isAuthSelected ? 'selected' : ''}`}
                to="/auth/register"
              >
                Регистрация
              </NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/auth" component={Login} />
                <Route path="/auth/register" component={Register} />
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
  setAuthActivity: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
  location: PropTypes.any,
  isLogin: PropTypes.bool
};

export default AuthPage;
