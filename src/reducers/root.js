import { combineReducers } from 'redux';
import user from './user';
import authPage from './authpage';

const root = combineReducers({
  user,
  authPage
});

export default root;
