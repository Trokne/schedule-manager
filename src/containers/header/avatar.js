import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from '../../components/header/avatar';
import logoutAndGoHome from '../../actions/authorization/logout';
import changePopupVisibility from '../../actions/header/avatar';

const mapStatetoProps = state => ({
  login: state.user.login,
  isOpenedPopup: state.avatar.isOpenedPopup
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAndGoHome()),
  changePopupVisibility: isVisible => dispatch(changePopupVisibility(isVisible))
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Avatar)
);
