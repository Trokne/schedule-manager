import CHANGE_VISIBLE_STATE from '../../constants/header/avatar';

const changePopupVisibility = isVisible => ({
  type: CHANGE_VISIBLE_STATE,
  payload: isVisible
});

export default changePopupVisibility;
