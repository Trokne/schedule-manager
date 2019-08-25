import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthPage from '../../components/auth/authpage';
import * as actions from '../../actions/auth';

const mapStatetoProps = state => ({
  isAuthSelected: state.authPage.isAuthSelected
});

const mapDispatchToProps = dispatch => ({
  setAuthActivity: isActive => dispatch(actions.openAuth(isActive))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(AuthPage)
);
