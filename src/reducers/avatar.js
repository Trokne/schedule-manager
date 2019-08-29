import CHANGE_VISIBLE_STATE from '../constants/header/avatar';

const initialState = { isOpenedPopup: false };

export default function avatar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VISIBLE_STATE:
      return {
        isOpenedPopup: action.payload
      };
    default:
      return state;
  }
}
