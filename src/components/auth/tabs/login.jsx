import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../../../styles/authpage.pcss';

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
          label="Еееее"
          defaultValue="Hello World"
          margin="normal"
          variant="outlined"
        />
      </Fragment>
    );
  }
}

Login.propTypes = {
  setAuthActivity: PropTypes.func.isRequired
};

export default Login;
