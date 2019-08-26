import React from 'react';
import '../../styles/groups.pcss';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input } from 'antd';

const AddingGroups = props => {
  const { isOpenedAddingGroups, closeAddingGroups, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={closeAddingGroups}>
      <Modal
        visible={isOpenedAddingGroups}
        title="Добавление группы"
        onCancel={closeAddingGroups}
        footer={[
          <Button key="back" onClick={closeAddingGroups}>
            Отмена
          </Button>,
          <Button htmlType="submit" key="submit" type="primary">
            Добавить
          </Button>
        ]}
      >
        <Form.Item className="group-name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Пожалуйста, введите название группы!' }]
          })(<Input placeholder="Название группы" />)}
        </Form.Item>
      </Modal>
    </Form>
  );
};

AddingGroups.propTypes = {
  closeAddingGroups: PropTypes.func.isRequired,
  isOpenedAddingGroups: PropTypes.bool.isRequired,
  form: PropTypes.any
};

export default Form.create({ name: 'addingGroups' })(AddingGroups);
