import { connect } from 'react-redux';
import Register from '../../components/auth/tabs/register';
import openAuth from '../../actions/auth';

// const mapStatetoProps = state => ({
//   isAuthSelected: state.authPage.isAuthSelected
// });

const mapDispatchToProps = dispatch => ({
  setAuthActivity: () => dispatch(openAuth(false))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
