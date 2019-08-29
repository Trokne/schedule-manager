import * as addTypes from '../constants/groups/add-groups-modal';
import * as editTypes from '../constants/groups/group-popover';

const initialState = {
  isOpenedAddingGroups: false,
  isAddState: true,
  groupValues: [],
  universities: [],
  universityOptions: [],
  currentGroup: null
};

export default function groups(state = initialState, action) {
  switch (action.type) {
    case addTypes.CHANGE_ADDING_GROUPS_VISIBILITY:
      return {
        ...state,
        isOpenedAddingGroups: action.payload.isOpenedAddingGroups,
        isAddState: action.payload.isAddState
      };
    case addTypes.ADD_FETCHED_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload
      };
    case addTypes.ADD_UNIVERSITY_OPTIONS:
      return {
        ...state,
        universityOptions: action.payload
      };
    case addTypes.ADD_GROUP_IN_LIST:
      return {
        ...state,
        groupValues: state.groupValues.concat(action.payload)
      };
    case editTypes.DELETE_GROUP:
      return {
        ...state,
        groupValues: state.groupValues.filter(g => g.Id !== action.payload)
      };
    case editTypes.SET_CURRENT_GROUP:
      return {
        ...state,
        currentGroup: action.payload
      };
    case addTypes.UPDATE_GROUP_IN_LIST:
      return {
        ...state,
        groupValues: state.groupValues
          .filter(g => g.Id !== action.payload.Id)
          .concat(action.payload.Id)
      };
    default:
      return state;
  }
}
