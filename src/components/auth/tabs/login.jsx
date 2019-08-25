import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/authpage.pcss';
import '../../../styles/authtab.pcss';
import { Form, Icon, Input, Button, Spin } from 'antd';

class Login extends Component {
  componentDidMount() {
    const { setAuthActivity } = this.props;
    setAuthActivity();
  }

  render() {
    const { form, handleSumbit, isLoading } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Fragment>
        <Spin spinning={isLoading}>
          <Form
            className="login-form"
            onSubmit={event => {
              handleSumbit(event, form);
            }}
          >
            <Form.Item className="auth-input">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Имя пользователя"
                />
              )}
            </Form.Item>
            <Form.Item className="auth-input">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Пожалуйста, введите пароль!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Пароль"
                />
              )}
            </Form.Item>
            <Form.Item className="auth-input">
              <Button type="primary" htmlType="submit" className="button">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Fragment>
    );
  }
}

Login.propTypes = {
  setAuthActivity: PropTypes.func.isRequired,
  handleSumbit: PropTypes.func.isRequired,
  form: PropTypes.any,
  isLoading: PropTypes.bool.isRequired
};

export default Form.create({ name: 'login' })(Login);
