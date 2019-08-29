import CHANGE_LOADER_STATE from '../../constants/decoration/loader';

const changeLoaderState = isVisible => ({
  type: CHANGE_LOADER_STATE,
  payload: isVisible
});

export default changeLoaderState;
