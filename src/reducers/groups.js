import CHANGE_ADDING_GROUPS_VISIBILITY from '../constants/groups/addgroups';

const initialState = { isOpenedAddingGroups: false };

export default function groups(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADDING_GROUPS_VISIBILITY:
      return {
        isOpenedAddingGroups: action.payload
      };
    default:
      return state;
  }
}
