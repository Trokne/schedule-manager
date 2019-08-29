import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthPage from '../../components/auth/authpage';
import * as authActions from '../../actions/authorization/login';
import * as navigationActions from '../../actions/network/navigation';

const mapStatetoProps = state => ({
  isAuthSelected: state.authPage.isAuthSelected,
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
  setAuthTabActivity: isActive => dispatch(authActions.selectAuthTab(isActive)),
  goHome: () => dispatch(navigationActions.goHome())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(AuthPage)
);
