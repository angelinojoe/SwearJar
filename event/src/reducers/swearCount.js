const initialState = {
  swearCount: 0,
  isUrgent: 'false'
};

const swearCount = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_COUNT':
      newState.swearCount += action.swearCount;
      return newState;
    case 'TOGGLE_URGENT':
      newState.isUrgent = action.isUrgent;
      return newState;
    default:
      return state;
  }
};

export default swearCount;
