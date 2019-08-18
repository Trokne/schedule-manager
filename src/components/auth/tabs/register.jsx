import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {
  componentDidMount() {
    const { setAuthActivity } = this.props;
    setAuthActivity();
  }

  render() {
    return (
      <Fragment>
        <div>s</div>
      </Fragment>
    );
  }
}

Register.propTypes = {
  setAuthActivity: PropTypes.func.isRequired
};

export default Register;
