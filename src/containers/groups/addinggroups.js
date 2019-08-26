import { connect } from 'react-redux';
import AddingGroups from '../../components/groups/addinggroups';
import changeAddingGroupsVisibility from '../../actions/groups/addgroups';

const mapStateToProps = state => ({
  isOpenedAddingGroups: state.groups.isOpenedAddingGroups
});

const mapDispatchToProps = dispatch => ({
  closeAddingGroups: () => dispatch(changeAddingGroupsVisibility(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddingGroups);
