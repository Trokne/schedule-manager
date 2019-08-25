import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from '../../components/header/avatar';
import * as authFunctions from '../../actions/auth';
import changePopupVisibility from '../../actions/avatar';

const mapStatetoProps = state => ({
  login: state.user.login,
  isOpenedPopup: state.avatar.isOpenedPopup
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authFunctions.logoutAndGoHome()),
  changePopupVisibility: isVisible => dispatch(changePopupVisibility(isVisible))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Avatar)
);
