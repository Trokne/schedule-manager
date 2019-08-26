import React from 'react';
import '../../styles/groups.pcss';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import AddingGroups from '../../containers/groups/addinggroups';

const { Column } = Table;

const Groups = props => {
  const { openAddingGroups } = props;
  return (
    <div className="body">
      <div className="box add-item">
        <Button icon="plus" onClick={openAddingGroups}>
          Добавить группу
        </Button>
        <AddingGroups />
      </div>
      <div className="box groups">
        <Table className="table">
          <Column title="Группа" dataIndex="name" key="name" />
          <Column title="Начало обучения" dataIndex="startYear" key="startYear" />
          <Column title="Окончание обучения" dataIndex="endYear" key="endYear" />
          <Column title="Университет" dataIndex="university" key="university" />
          <Column title="Город" dataIndex="city" key="city" />
        </Table>
      </div>
    </div>
  );
};

Groups.propTypes = {
  openAddingGroups: PropTypes.func.isRequired,
  isOpenedAddingGroups: PropTypes.bool.isRequired
};

export default Groups;
