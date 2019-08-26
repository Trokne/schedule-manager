import { connect } from 'react-redux';
import Groups from '../../components/groups/groups';
import changeAddingGroupsVisibility from '../../actions/groups/addgroups';

const mapStateToProps = state => ({
  isOpenedAddingGroups: state.groups.isOpenedAddingGroups
});

const mapDispatchToProps = dispatch => ({
  openAddingGroups: () => dispatch(changeAddingGroupsVisibility(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
