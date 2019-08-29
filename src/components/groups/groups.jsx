import React from 'react';
import '../../styles/groups.pcss';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import AddingGroups from '../../containers/groups/addinggroups';

const { Column } = Table;

class Groups extends React.Component {
  componentDidMount() {
    const { universities, fetchUniversities, groups, fetchGroups } = this.props;
    if (universities.length === 0 || universities === undefined) {
      fetchUniversities();
    }

    if (groups.length === 0 || groups === undefined) {
      fetchGroups();
    }
  }

  render() {
    const { openAddingGroups, groups } = this.props;
    return (
      <div className="body">
        <div className="box add-item">
          <Button icon="plus" onClick={openAddingGroups}>
            Добавить группу
          </Button>
          <AddingGroups />
        </div>
        <div className="box groups">
          <Table className="table" dataSource={groups} rowKey="Id">
            <Column
              title="Группа"
              dataIndex="Name"
              key="Name"
              sorter={(a, b) => a.Name.length - b.Name.length}
            />
            <Column title="Описание" dataIndex="Description" key="Description" />
            <Column
              title="Университет"
              dataIndex="UniversityName"
              key="UniversityName"
              sorter={(a, b) => a.UniversityName.length - b.UniversityName.length}
            />
          </Table>
        </div>
      </div>
    );
  }
}

Groups.propTypes = {
  openAddingGroups: PropTypes.func.isRequired,
  isOpenedAddingGroups: PropTypes.bool.isRequired,
  universities: PropTypes.array,
  groups: PropTypes.array,
  fetchUniversities: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired
};

export default Groups;
