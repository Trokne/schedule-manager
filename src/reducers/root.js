import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import authPage from './authpage';
import avatar from './avatar';
import loader from './loader';
import groups from './groups';

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    user,
    authPage,
    avatar,
    loader,
    groups
  });
};

export default createRootReducer;
