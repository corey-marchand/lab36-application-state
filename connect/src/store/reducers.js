const actions = {};
let initialState = { foo: 'bar' };

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { foo: Math.random() };
    case 'RESET':
      return { initialState };
    default:
      return state;
  }
};

actions.changeFoo = payload => {
  return {
    type: 'CHANGE',
    payload: payload
  }
}

actions.resetFoo = payload => {
  return {
    type: 'RESET'
  }
}

export {actions};
export default reducer;