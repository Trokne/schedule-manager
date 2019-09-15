import React from 'react';
import '../../styles/add-groups-modal.pcss';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Select, Spin } from 'antd';

const { TextArea } = Input;

// eslint-disable-next-line react/prefer-stateless-function
class AddGroupsModal extends React.Component {
  render() {
    const {
      isOpenedAddingGroups,
      closeAddingGroups,
      form,
      universityOptions,
      submitGroup,
      isLoading,
      isAddState,
      currentGroup
    } = this.props;

    const { getFieldDecorator } = form;
    const title = isAddState ? 'Добавление группы' : 'Редактирование группы';
    const okButtonText = isAddState ? 'Добавить' : 'Изменить';
    let defaultName;
    let defaultUniversityId;
    let defaultDescription;

    if (currentGroup !== undefined && currentGroup !== null) {
      defaultName = currentGroup.Name;
      defaultDescription = currentGroup.Description;
      defaultUniversityId = currentGroup.UniversityId;
    } else {
      defaultName = '';
      defaultDescription = '';
    }
    return (
      <Form>
        <Modal
          visible={isOpenedAddingGroups}
          title={title}
          onCancel={() => closeAddingGroups()}
          footer={[
            <Button key="back" onClick={closeAddingGroups}>
              Отмена
            </Button>,
            <Button
              htmlType="submit"
              key="submit"
              type="primary"
              onClick={() => submitGroup(form, isAddState, currentGroup)}
              disabled={isLoading}
            >
              {okButtonText}
            </Button>
          ]}
        >
          <Spin spinning={isLoading}>
            <Form.Item>
              {getFieldDecorator('name', {
                initialValue: defaultName,
                rules: [{ required: true, message: 'Пожалуйста, введите название группы!' }]
              })(<Input placeholder="Название группы" maxLength={30} />)}
            </Form.Item>
            <Form.Item className="description-form">
              {getFieldDecorator('description', {
                initialValue: defaultDescription,
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
                initialValue: defaultUniversityId,
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
  }
}

AddGroupsModal.propTypes = {
  closeAddingGroups: PropTypes.func.isRequired,
  submitGroup: PropTypes.func.isRequired,
  isOpenedAddingGroups: PropTypes.bool.isRequired,
  form: PropTypes.any,
  universityOptions: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  isAddState: PropTypes.bool.isRequired,
  currentGroup: PropTypes.object
};

export default Form.create({ name: 'addingGroups' })(AddGroupsModal);
