const initialState = {
  swearCount: 0
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_COUNT':
      return newState.swearCount + action.swearCount;
    default:
      return state;
  }
};
