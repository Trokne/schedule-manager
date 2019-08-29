import React from 'react';
import '../../styles/add-groups-modal.pcss';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Select, Spin } from 'antd';

const { TextArea } = Input;

const AddGroupsModal = props => {
  const {
    isOpenedAddingGroups,
    closeAddingGroups,
    form,
    universityOptions,
    submitGroup,
    isLoading
  } = props;
  const { getFieldDecorator } = form;
  return (
    <Form>
      <Modal
        visible={isOpenedAddingGroups}
        title="Добавление группы"
        onCancel={closeAddingGroups}
        footer={[
          <Button key="back" onClick={closeAddingGroups}>
            Отмена
          </Button>,
          <Button
            htmlType="submit"
            key="submit"
            type="primary"
            onClick={() => submitGroup(form)}
            disabled={isLoading}
          >
            Добавить
          </Button>
        ]}
      >
        <Spin spinning={isLoading}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Пожалуйста, введите название группы!' }]
            })(<Input placeholder="Название группы" maxLength={30} />)}
          </Form.Item>
          <Form.Item className="description-form">
            {getFieldDecorator('description', {
              rules: [{ required: false, message: 'Пожалуйста, введите описание группы!' }]
            })(
              <TextArea
                placeholder="Описание группы"
                autosize={{ minRows: 1, maxRows: 10 }}
                maxLength="400"
              />
            )}
          </Form.Item>
          <Form.Item className="university-form">
            {getFieldDecorator('university', {
              rules: [{ required: true, message: 'Пожалуйста, выберите университет!' }]
            })(
              <Select
                showSearch
                className="select-university"
                placeholder="Университет"
                optionFilterProp="children"
              >
                {universityOptions}
              </Select>
            )}
          </Form.Item>
        </Spin>
      </Modal>
    </Form>
  );
};

AddGroupsModal.propTypes = {
  closeAddingGroups: PropTypes.func.isRequired,
  submitGroup: PropTypes.func.isRequired,
  isOpenedAddingGroups: PropTypes.bool.isRequired,
  form: PropTypes.any,
  universityOptions: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
};

export default Form.create({ name: 'addingGroups' })(AddGroupsModal);
