import { Modal } from 'antd';
import { DELETE_GROUP } from '../../constants/groups/group-popover';
import { byId } from '../../constants/network/groups';
import getErrorMessage from '../network/errors';
import http from '../../services/http';
import * as notifications from '../decoration/notification';

const { confirm } = Modal;

const deleteGroupFromSite = groupId => ({
  type: DELETE_GROUP,
  payload: groupId
});

const deleteGroup = group => async dispatch => {
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

export default deleteGroup;
