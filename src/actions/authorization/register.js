import * as navigation from '../network/navigation';
import * as connection from '../../constants/network/accountApi';

import http from '../../services/http';
import * as notifications from '../decoration/notification';
import getErrorMessage from '../network/errors';
import changeLoaderState from '../decoration/loader';

const tryRegister = (name, password) => async dispatch => {
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

const handleRegisterSumbit = (e, form) => async dispatch => {
  e.preventDefault();
  dispatch(changeLoaderState(true));
  form.validateFields((err, values) => {
    if (!err) {
      dispatch(tryRegister(values.username, values.password));
    } else dispatch(changeLoaderState(false));
  });
};

export default handleRegisterSumbit;
