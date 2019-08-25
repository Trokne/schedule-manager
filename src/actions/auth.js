import { push } from 'connected-react-router';
import * as types from '../constants/auth';
import * as connection from '../constants/network/accountApi';

import http from '../services/http';
import * as notifications from './notification';
import getErrorMessage from './errors';

export const openAuth = isAuthSelected => ({ type: types.OPEN_AUTH, payload: isAuthSelected });

export const loginOnSite = (name, password, token) => ({
  type: types.LOGIN,
  payload: { name, password, token }
});

export const tryLogin = (name, password) => async dispatch => {
  http
    .post(connection.login, { login: name, password })
    .then(response => {
      notifications.openSuccessNotifaction(`Добро пожаловать, ${name}!`, '');
      dispatch(push('/'));
      dispatch(loginOnSite(name, password, response.data.Content));
    })
    .catch(error => {
      notifications.openErrorNotification('Вход не удался!', getErrorMessage(error));
    });
};

export const tryRegister = (name, password) => async dispatch => {
  http
    .post(connection.register, { login: name, password })
    .then(() => {
      dispatch(push('/auth'));
      notifications.openSuccessNotifaction('Регистрация успешно завершена!');
    })
    .catch(error => {
      notifications.openErrorNotification('Вход не удался!', getErrorMessage(error));
    });
};

export const handleRegisterSumbit = (e, form) => async dispatch => {
  e.preventDefault();

  form.validateFields((err, values) => {
    if (!err) {
      dispatch(tryRegister(values.username, values.password));
    }
  });
};

export const handleLoginSumbit = (e, form) => async dispatch => {
  e.preventDefault();

  form.validateFields((err, values) => {
    if (!err) {
      dispatch(tryLogin(values.username, values.password));
    }
  });
};
