import * as types from '../constants/auth';

const initialState = { isLogin: false, login: '', password: '', token: '' };

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        isLogin: true,
        login: action.payload.login,
        password: action.payload.password,
        token: action.payload.token
      };
    default:
      return state;
  }
}
