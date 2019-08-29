import { notification } from 'antd';

export const openErrorNotification = (title, message) => {
  notification.error({
    message: title,
    description: message
  });
};

export const openSuccessNotifaction = (title, message) => {
  notification.success({
    message: title,
    description: message
  });
};
