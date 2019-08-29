import * as types from '../constants/groups/addgroups';

const initialState = {
  isOpenedAddingGroups: false,
  groupValues: [],
  universities: [],
  universityOptions: []
};

export default function groups(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_ADDING_GROUPS_VISIBILITY:
      return {
        ...state,
        isOpenedAddingGroups: action.payload
      };
    case types.ADD_FETCHED_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload
      };
    case types.ADD_UNIVERSITY_OPTIONS:
      return {
        ...state,
        universityOptions: action.payload
      };
    case types.ADD_GROUP_IN_LIST:
      return {
        ...state,
        groupValues: state.groupValues.concat(action.payload)
      };
    default:
      return state;
  }
}
