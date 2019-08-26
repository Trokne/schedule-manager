import React from 'react';
import '../styles/groups.pcss';
import { Button, Table } from 'antd';

const { Column } = Table;

const Groups = () => (
  <div className="body">
    <div className="box add-item">
      <Button icon="plus">Добавить группу</Button>
    </div>
    <div className="box">
      <Table>
        <Column title="Группа" dataIndex="name" key="name" />
        <Column title="Университет" dataIndex="university" key="university" />
        <Column title="Город" dataIndex="city" key="city" />
      </Table>
    </div>
  </div>
);
export default Groups;
