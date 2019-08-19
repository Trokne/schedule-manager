import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../../styles/authpage.pcss';
import '../../../styles/logintab.pcss';

class Login extends Component {
  componentDidMount() {
    const { setAuthActivity } = this.props;
    setAuthActivity();
  }

  render() {
    return (
      <Fragment>
        <TextField
          className="auth-input"
          required
          id="outlined-required"
          label="Логин"
          variant="outlined"
        />
        <TextField
          className="auth-input"
          required
          id="outlined-required"
          label="Пароль"
          variant="outlined"
        />
        <Button variant="contained" className="auth-input button" color="primary" to="/auth">
          Войти
        </Button>
      </Fragment>
    );
  }
}

Login.propTypes = {
  setAuthActivity: PropTypes.func.isRequired
};

export default Login;
