import { Select } from 'antd';
import React from 'react';
import * as types from '../../constants/groups/add-groups-modal';
import http from '../../services/http';
import * as groupsApi from '../../constants/network/groups';
import * as universitiesApi from '../../constants/network/universities';
import * as notifications from '../decoration/notification';
import getErrorMessage from '../network/errors';
import changeLoaderState from '../decoration/loader';
import { setCurrentGroup } from './group-popover';

const addUniversityOptions = universityOptions => ({
  type: types.ADD_UNIVERSITY_OPTIONS,
  payload: universityOptions
});

const addFetchedUniversities = data => ({
  type: types.ADD_FETCHED_UNIVERSITIES,
  payload: data
});

const mapUniversityOptions = universityValues => async dispatch => {
  const universityOptions = universityValues.map(university => (
    <Select.Option value={university.id} key={university.id}>
      {university.name}
    </Select.Option>
  ));
  dispatch(addUniversityOptions(universityOptions));
};

const setVisibilityEditAddGroup = isVisible => ({
  type: types.CHANGE_ADDING_GROUPS_VISIBILITY,
  payload: isVisible
});

export const setAddState = isAddState => ({
  type: types.SET_ADD_STATE,
  payload: isAddState
});

export const changeAddingGroupsVisibility = isVisible => async dispatch => {
  dispatch(setVisibilityEditAddGroup(isVisible));
};

export const universityFilterOptions = (input, option) => {
  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

export const fetchUniversities = () => async dispatch => {
  http
    .get(universitiesApi.get)
    .then(response => {
      dispatch(addFetchedUniversities(response.data));
      dispatch(mapUniversityOptions(response.data));
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка загрузки университетов!', getErrorMessage(error));
    });
};

export const addGroupInList = group => ({
  type: types.ADD_GROUP_IN_LIST,
  payload: group
});

const updateGroupInList = group => ({
  type: types.UPDATE_GROUP_IN_LIST,
  payload: group
});

const addGroup = (form, name, description, universityName, universityId) => async dispatch => {
  http
    .post(groupsApi.create, { Name: name, UniversityId: universityId, Description: description })
    .then(response => {
      dispatch(
        addGroupInList({
          Id: response.data.id,
          Name: name,
          Description: description,
          UniversityId: universityId,
          UniversityName: universityName
        })
      );
      dispatch(changeAddingGroupsVisibility(false));
      notifications.openSuccessNotifaction('Группа успешно добавлена', '');
      dispatch(changeLoaderState(false));
      form.resetFields();
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка добавления группы!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

const updateGroup = (
  form,
  name,
  description,
  universityName,
  universityId,
  groupId
) => async dispatch => {
  http
    .post(groupsApi.update, {
      Name: name,
      UniversityId: universityId,
      Description: description,
      Id: groupId
    })
    .then(response => {
      dispatch(
        updateGroupInList({
          Id: response.data.id,
          Name: name,
          Description: description,
          UniversityId: universityId,
          UniversityName: universityName
        })
      );
      notifications.openSuccessNotifaction('Группа успешно изменена', '');
      dispatch(changeAddingGroupsVisibility(false));
      dispatch(changeLoaderState(false));
      dispatch(setCurrentGroup(null));
      form.resetFields();
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка изменения группы!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

export const submitGroup = (form, isAddState, selectedGroup) => async dispatch => {
  dispatch(changeLoaderState(true));
  form.validateFields((err, values) => {
    if (!err) {
      http.get(universitiesApi.getById(values.university)).then(response => {
        if (isAddState) {
          dispatch(
            addGroup(form, values.name, values.description, response.data.name, values.university)
          );
        } else {
          dispatch(
            updateGroup(
              form,
              values.name,
              values.description,
              response.data.name,
              values.university,
              selectedGroup.Id
            )
          );
        }
      });
    } else dispatch(changeLoaderState(false));
  });
};
