import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../../components/auth/tabs/register';
import * as authFunctions from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  setAuthActivity: () => dispatch(authFunctions.openAuth(false)),
  handleSumbit: (e, form) => dispatch(authFunctions.handleRegisterSumbit(e, form))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Register)
);
