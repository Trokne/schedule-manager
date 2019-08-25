import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import authPage from './authpage';

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    user,
    authPage
  });
};

export default createRootReducer;
