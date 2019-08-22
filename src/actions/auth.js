import * as types from '../constants/auth';

const openAuth = isAuthSelected => ({ type: types.OPEN_AUTH, payload: isAuthSelected });

export default openAuth;
