import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';

const Item = Menu.Item;

const menu = (deleteGroup, record) => (
  <Menu>
    <Item>
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
  const { value, record, deleteGroup } = props;
  return (
    <Dropdown overlay={menu(deleteGroup, record)} trigger={['contextMenu']}>
      <div>{value}</div>
    </Dropdown>
  );
};

GroupPopover.propTypes = {
  value: PropTypes.any.isRequired,
  record: PropTypes.any.isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default GroupPopover;
