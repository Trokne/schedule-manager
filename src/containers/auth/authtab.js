import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../../components/auth/tabs/login';
import * as authFunctions from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  setAuthActivity: () => dispatch(authFunctions.openAuth(true)),
  handleSumbit: (e, form) => dispatch(authFunctions.handleLoginSumbit(e, form))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
