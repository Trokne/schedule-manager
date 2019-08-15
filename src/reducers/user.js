const initialState = [{ isLogin: false }];

export default function user(state = initialState, action) {
  if (action === undefined || action === null) return state;

  switch (action.type) {
    default:
      return state;
  }
}
