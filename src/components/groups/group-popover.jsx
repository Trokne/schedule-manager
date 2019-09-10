import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';

const Item = Menu.Item;
const selectCurrentGroupAndOpen = (record, setCurrentGroup, openUpdateGroups) => {
  setCurrentGroup(record);
  openUpdateGroups();
};

const menu = (deleteGroup, openUpdateGroups, setCurrentGroup, record) => (
  <Menu>
    <Item onClick={() => selectCurrentGroupAndOpen(record, setCurrentGroup, openUpdateGroups)}>
      <Icon type="edit" />
      Редактировать
    </Item>
    <Item onClick={() => deleteGroup(record)}>
      <Icon type="delete" />
      Удалить
    </Item>
  </Menu>
);

const GroupPopover = props => {
  const { value, record, deleteGroup, setCurrentGroup, openUpdateGroups } = props;
  return (
    <Dropdown
      overlay={menu(deleteGroup, openUpdateGroups, setCurrentGroup, record)}
      trigger={['contextMenu']}
    >
      <div>{value}</div>
    </Dropdown>
  );
};

GroupPopover.propTypes = {
  value: PropTypes.any.isRequired,
  record: PropTypes.any.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  setCurrentGroup: PropTypes.func.isRequired,
  openUpdateGroups: PropTypes.func.isRequired
};

export default GroupPopover;