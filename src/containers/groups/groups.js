import { connect } from 'react-redux';
import Groups from '../../components/groups/groups';
import * as addingActions from '../../actions/groups/add-groups-modal';
import fetchGroups from '../../actions/groups/groups';

const mapStateToProps = state => ({
  isOpenedAddingGroups: state.groups.isOpenedAddingGroups,
  universities: state.groups.universities,
  groups: state.groups.groupValues
});

const mapDispatchToProps = dispatch => ({
  openAddingGroups: () => dispatch(addingActions.changeAddingGroupsVisibility(true, true)),
  fetchUniversities: () => dispatch(addingActions.fetchUniversities()),
  fetchGroups: () => dispatch(fetchGroups())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
