import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthPage from '../../components/auth/authpage';
import * as authActions from '../../actions/auth';
import * as navigationActions from '../../actions/navigation';

const mapStatetoProps = state => ({
  isAuthSelected: state.authPage.isAuthSelected,
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
  setAuthActivity: isActive => dispatch(authActions.openAuth(isActive)),
  goHome: () => dispatch(navigationActions.goHome())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(AuthPage)
);
