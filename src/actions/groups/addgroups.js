import CHANGE_ADDING_GROUPS_VISIBILITY from '../../constants/groups/addgroups';

const changeAddingGroupsVisibility = isVisible => ({
  type: CHANGE_ADDING_GROUPS_VISIBILITY,
  payload: isVisible
});

export default changeAddingGroupsVisibility;
