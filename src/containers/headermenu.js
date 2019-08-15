import { connect } from 'react-redux';
import HeaderMenu from '../components/header/headermenu';
import '../styles/headermenu.pcss';

const mapStatetoProps = state => ({
  isLogin: state.isLogin
});

export default connect(mapStatetoProps)(HeaderMenu);
