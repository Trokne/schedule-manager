import { connect } from 'react-redux';
import Login from '../../components/auth/tabs/login';
import openAuth from '../../actions/auth';

// const mapStatetoProps = state => ({
//   isAuthSelected: state.authPage.isAuthSelected
// });

const mapDispatchToProps = dispatch => ({
  setAuthActivity: () => dispatch(openAuth(true))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
