import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderMenu from '../components/header/headermenu';
import '../styles/headermenu.pcss';

const mapStatetoProps = state => ({
  isLogin: state.user.isLogin
});

export default withRouter(connect(mapStatetoProps)(HeaderMenu));
