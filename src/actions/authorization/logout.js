import * as types from '../../constants/authorization/auth';
import * as navigation from '../network/navigation';

const logout = () => ({
  type: types.LOGOUT
});

const logoutAndGoHome = () => async dispatch => {
  dispatch(navigation.goHome());
  dispatch(logout());
};

export default logoutAndGoHome;
