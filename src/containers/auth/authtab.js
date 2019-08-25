import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../../components/auth/tabs/login';
import * as authFunctions from '../../actions/auth';

const mapStatetoProps = state => ({
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  setAuthActivity: () => dispatch(authFunctions.openAuth(true)),
  handleSumbit: (e, form) => dispatch(authFunctions.handleLoginSumbit(e, form))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Login)
);
