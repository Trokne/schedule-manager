import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/authpage.pcss';
import '../../../styles/authtab.pcss';
import { Form, Icon, Input, Button } from 'antd';

class Register extends Component {
  componentDidMount() {
    const { setAuthActivity } = this.props;
    setAuthActivity();
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Fragment>
        <Form className="login-form">
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
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

Register.propTypes = {
  setAuthActivity: PropTypes.func.isRequired,
  form: PropTypes.any
};

export default Form.create({ name: 'register' })(Register);
