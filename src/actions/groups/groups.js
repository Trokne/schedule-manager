import http from '../../services/http';
import * as groupsApi from '../../constants/network/groups';
import * as notifications from '../decoration/notification';
import getErrorMessage from '../network/errors';
import changeLoaderState from '../decoration/loader';
import { addGroupInList } from './add-groups-modal';

const fetchGroups = () => async dispatch => {
  dispatch(changeLoaderState(true));
  http
    .get(groupsApi.getRecursively)
    .then(response => {
      dispatch(addGroupInList(response.data));
      dispatch(changeLoaderState(false));
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка загрузки групп!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

export default fetchGroups;
