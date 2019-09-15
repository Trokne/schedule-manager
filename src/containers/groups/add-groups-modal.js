import { connect } from 'react-redux';
import AddGroupsModal from '../../components/groups/add-groups-modal';
import * as addingActions from '../../actions/groups/add-groups-modal';

const mapStateToProps = state => ({
  universityOptions: state.groups.universityOptions,
  isOpenedAddingGroups: state.groups.isOpenedAddingGroups,
  isLoading: state.loader.isLoading,
  isAddState: state.groups.isAddState,
  currentGroup: state.groups.currentGroup
});

const mapDispatchToProps = dispatch => ({
  closeAddingGroups: () => dispatch(addingActions.changeAddingGroupsVisibility(false)),
  universityFilterOptions: (input, option) => {
    dispatch(addingActions.universityFilterOptions(input, option));
  },
  submitGroup: (form, isAddState, group) => {
    dispatch(addingActions.submitGroup(form, isAddState, group));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGroupsModal);
