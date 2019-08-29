import http from '../../services/http';
import * as groupsApi from '../../constants/network/groups';
import * as notifications from '../notification';
import getErrorMessage from '../errors';
import changeLoaderState from '../loader';
import { addGroupInList } from './addgroups';

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
