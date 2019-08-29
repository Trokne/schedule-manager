import { Modal } from 'antd';
import * as types from '../../constants/groups/group-popover';
import { byId } from '../../constants/network/groups';
import getErrorMessage from '../network/errors';
import http from '../../services/http';
import * as notifications from '../decoration/notification';

const { confirm } = Modal;

const deleteGroupFromSite = groupId => ({
  type: types.DELETE_GROUP,
  payload: groupId
});

export const setCurrentGroup = group => ({
  type: types.SET_CURRENT_GROUP,
  payload: group
});

export const deleteGroup = group => async dispatch => {
  confirm({
    title: `Вы точно хотите удалить группу ${group.Name}?`,
    content: 'Удаление группы является необратимым процессом.',
    onOk: () => {
      http
        .delete(byId(group.Id))
        .then(() => {
          notifications.openSuccessNotifaction(`Группа ${group.Name} успешно удалена!`);
          dispatch(deleteGroupFromSite(group.Id));
        })
        .catch(error => {
          notifications.openErrorNotification(
            `Ошибка удаления группы ${group.Name}!`,
            getErrorMessage(error)
          );
        });
    },
    onCancel() {},
    okText: 'Удалить',
    cancelText: 'Отмена',
    icon: 'delete'
  });
};
