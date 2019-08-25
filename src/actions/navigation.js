import { push } from 'connected-react-router';

export const goHome = () => async dispatch => {
  dispatch(push('/'));
};

export const route = path => async dispatch => {
  dispatch(push(path));
};
