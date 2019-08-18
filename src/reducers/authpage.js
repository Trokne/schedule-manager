import * as types from '../constants/auth';

const initialState = { isAuthSelected: true };

export default function authPage(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_AUTH:
      return { isAuthSelected: action.payload };
    default:
      return state;
  }
}
