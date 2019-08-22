import React, { Fragment, Component } from 'react';
import '../../styles/authpage.pcss';
import { Route, Switch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../containers/auth/authtab';
import Register from '../../containers/auth/registertab';

class AuthPage extends Component {
  componentDidMount() {
    const { setAuthActivity } = this.props;
    setAuthActivity(true);
  }

  render() {
    const { isAuthSelected } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div className="box">
            <div className="header">
              <NavLink className={`tab ${isAuthSelected ? 'selected' : ''}`} to="/auth">
                Вход
              </NavLink>
              <NavLink className={`tab ${!isAuthSelected ? 'selected' : ''}`} to="/auth/register">
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
  setAuthActivity: PropTypes.func.isRequired
};

export default AuthPage;
