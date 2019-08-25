import * as navigation from './navigation';
import * as types from '../constants/auth';
import * as connection from '../constants/network/accountApi';

import http from '../services/http';
import * as notifications from './notification';
import getErrorMessage from './errors';
import changeLoaderState from './loader';

const logout = () => ({
  type: types.LOGOUT
});

export const logoutAndGoHome = () => async dispatch => {
  dispatch(navigation.goHome());
  dispatch(logout());
};

export const openAuth = isAuthSelected => ({ type: types.OPEN_AUTH, payload: isAuthSelected });

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

export const tryRegister = (name, password) => async dispatch => {
  http
    .post(connection.register, { login: name, password })
    .then(() => {
      dispatch(navigation.route('/auth'));
      notifications.openSuccessNotifaction('Регистрация успешно завершена!');
      dispatch(changeLoaderState(false));
    })
    .catch(error => {
      notifications.openErrorNotification('Вход не удался!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

export const handleRegisterSumbit = (e, form) => async dispatch => {
  e.preventDefault();
  dispatch(changeLoaderState(true));
  form.validateFields((err, values) => {
    if (!err) {
      dispatch(tryRegister(values.username, values.password));
    } else dispatch(changeLoaderState(false));
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
