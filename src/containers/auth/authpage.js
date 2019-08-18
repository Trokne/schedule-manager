import { connect } from 'react-redux';
import AuthPage from '../../components/auth/authpage';
import openAuth from '../../actions/auth';

const mapStatetoProps = state => ({
  isAuthSelected: state.authPage.isAuthSelected
});

const mapDispatchToProps = dispatch => ({
  setAuthActivity: isActive => dispatch(openAuth(isActive))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(AuthPage);
