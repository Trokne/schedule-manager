import { connect } from 'react-redux';
import AddingGroups from '../../components/groups/addinggroups';
import * as addingActions from '../../actions/groups/addgroups';

const mapStateToProps = state => ({
  universityOptions: state.groups.universityOptions,
  isOpenedAddingGroups: state.groups.isOpenedAddingGroups,
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  closeAddingGroups: () => dispatch(addingActions.changeAddingGroupsVisibility(false)),
  universityFilterOptions: (input, option) => {
    dispatch(addingActions.universityFilterOptions(input, option));
  },
  submitGroup: form => dispatch(addingActions.submitGroup(form))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddingGroups);
