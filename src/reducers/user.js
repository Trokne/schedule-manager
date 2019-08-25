import * as types from '../constants/auth';

const initialState = { isLogin: false, login: '', password: '', token: '' };

const loginInfo = localStorage.getItem(types.LOGIN);
let localStorageState;
if (loginInfo) {
  localStorageState = JSON.parse(loginInfo);
}

export default function user(state = localStorageState || initialState, action) {
  let currentState;
  switch (action.type) {
    case types.LOGIN:
      currentState = {
        isLogin: true,
        login: action.payload.login,
        password: action.payload.password,
        token: action.payload.token
      };
      localStorage.setItem(types.LOGIN, JSON.stringify(currentState));
      return currentState;
    case types.LOGOUT:
      currentState = {
        isLogin: false,
        login: '',
        password: '',
        token: ''
      };
      localStorage.setItem(types.LOGIN, '');
      return currentState;
    default:
      return state;
  }
}
