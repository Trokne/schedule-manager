import { Select } from 'antd';
import React from 'react';
import * as types from '../../constants/groups/addgroups';
import http from '../../services/http';
import * as groupsApi from '../../constants/network/groups';
import * as universitiesApi from '../../constants/network/universities';
import * as notifications from '../notification';
import getErrorMessage from '../errors';
import changeLoaderState from '../loader';

export const changeAddingGroupsVisibility = isVisible => ({
  type: types.CHANGE_ADDING_GROUPS_VISIBILITY,
  payload: isVisible
});

export const addFetchedUniversities = data => ({
  type: types.ADD_FETCHED_UNIVERSITIES,
  payload: data
});

export const universityFilterOptions = (input, option) => {
  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const AddUniversityOptions = universityOptions => ({
  type: types.ADD_UNIVERSITY_OPTIONS,
  payload: universityOptions
});

const MapUniversityOptions = universityValues => async dispatch => {
  const universityOptions = universityValues.map(university => (
    <Select.Option value={university.id} key={university.id}>
      {university.name}
    </Select.Option>
  ));
  dispatch(AddUniversityOptions(universityOptions));
};

export const fetchUniversities = () => async dispatch => {
  http
    .get(universitiesApi.get)
    .then(response => {
      dispatch(addFetchedUniversities(response.data));
      dispatch(MapUniversityOptions(response.data));
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка загрузки университетов!', getErrorMessage(error));
    });
};

export const addGroupInList = group => ({
  type: types.ADD_GROUP_IN_LIST,
  payload: group
});

const addGroup = (name, description, universityName, universityId) => async dispatch => {
  http
    .post(groupsApi.general, { Name: name, UniversityId: universityId, Description: description })
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
    })
    .catch(error => {
      notifications.openErrorNotification('Ошибка добавления группы!', getErrorMessage(error));
      dispatch(changeLoaderState(false));
    });
};

export const submitGroup = form => async dispatch => {
  dispatch(changeLoaderState(true));
  form.validateFields((err, values) => {
    if (!err) {
      http.get(universitiesApi.getById(values.university)).then(response => {
        dispatch(addGroup(values.name, values.description, response.data.name, values.university));
      });
    } else dispatch(changeLoaderState(false));
  });
};
