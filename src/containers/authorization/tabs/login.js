import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../../../components/auth/tabs/login';
import * as authFunctions from '../../../actions/authorization/login';

const mapStatetoProps = state => ({
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  setAuthTabActivity: () => dispatch(authFunctions.selectAuthTab(true)),
  handleSumbit: (e, form) => dispatch(authFunctions.handleLoginSumbit(e, form))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Login)
);
