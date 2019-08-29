import * as navigation from '../network/navigation';
import * as types from '../../constants/authorization/auth';
import * as connection from '../../constants/network/accountApi';

import http from '../../services/http';
import * as notifications from '../decoration/notification';
import getErrorMessage from '../network/errors';
import changeLoaderState from '../decoration/loader';

export const selectAuthTab = isAuthSelected => ({ type: types.OPEN_AUTH, payload: isAuthSelected });

export const loginOnSite = (name, password, token) => ({
  type: types.LOGIN,
  payload: { login: name, password, token }
});

export const tryLogin = (name, password) => async dispatch => {
  http
    .post(connection.login, { login: name, password })
    .then(response => {
      notifications.openSuccessNotifaction(`Добро пожаловать, ${name}!`, '');
      dispatch(changeLoaderState(false));
      dispatch(navigation.goHome());
      dispatch(loginOnSite(name, password, response.data.Content));
    })
    .catch(error => {
      notifications.openErrorNotification('Вход не удался!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

export const handleLoginSumbit = (e, form) => async dispatch => {
  e.preventDefault();
  dispatch(changeLoaderState(true));
  form.validateFields((err, values) => {
    if (!err) {
      dispatch(tryLogin(values.username, values.password));
    } else dispatch(changeLoaderState(false));
  });
};
