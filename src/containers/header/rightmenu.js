import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RightMenu from '../../components/header/rightmenu';
import '../../styles/headermenu.pcss';
import logoutAndGoHome from '../../actions/authorization/logout';

const mapStatetoProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAndGoHome())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(RightMenu)
);
