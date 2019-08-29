import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../../../components/auth/tabs/register';
import handleRegisterSumbit from '../../../actions/authorization/register';
import { selectAuthTab } from '../../../actions/authorization/login';

const mapStatetoProps = state => ({
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  setAuthTabActivity: () => dispatch(selectAuthTab(false)),
  handleSumbit: (e, form) => dispatch(handleRegisterSumbit(e, form))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Register)
);
