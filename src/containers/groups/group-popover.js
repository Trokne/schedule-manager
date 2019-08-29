import { connect } from 'react-redux';
import deleteGroup from '../../actions/groups/group-popover';
import GroupPopover from '../../components/groups/group-popover';

const mapDispatchToProps = dispatch => ({
  deleteGroup: group => dispatch(deleteGroup(group))
});

export default connect(
  null,
  mapDispatchToProps
)(GroupPopover);
