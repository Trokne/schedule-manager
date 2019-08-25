import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderMenu from '../components/header/headermenu';
import '../styles/headermenu.pcss';
import * as authFunctions from '../actions/auth';

const mapStatetoProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authFunctions.logoutAndGoHome())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(HeaderMenu)
);
