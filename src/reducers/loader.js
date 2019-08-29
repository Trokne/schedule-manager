import CHANGE_LOADER_STATE from '../constants/decoration/loader';

const initialState = { isLoading: false };

export default function avatar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADER_STATE:
      return {
        isLoading: action.payload
      };
    default:
      return state;
  }
}
