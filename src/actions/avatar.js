import CHANGE_VISIBLE_STATE from '../constants/avatar';

const changePopupVisibility = isVisible => ({
  type: CHANGE_VISIBLE_STATE,
  payload: isVisible
});

export default changePopupVisibility;
