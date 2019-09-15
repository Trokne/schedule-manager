import { connect } from 'react-redux';
import * as editActions from '../../actions/groups/group-popover';
import GroupPopover from '../../components/groups/group-popover';
import * as addingActions from '../../actions/groups/add-groups-modal';

const mapDispatchToProps = dispatch => ({
  deleteGroup: group => dispatch(editActions.deleteGroup(group)),
  setCurrentGroup: group => dispatch(editActions.setCurrentGroup(group)),
  openUpdateGroups: () => dispatch(addingActions.changeAddingGroupsVisibility(true))
});

export default connect(
  null,
  mapDispatchToProps
)(GroupPopover);
