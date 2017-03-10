const initialState = {
  swearCount: 0
};

const swearCount = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_COUNT':
      return newState + action.swearCount;
    default:
      return state;
  }
};

export default swearCount;
