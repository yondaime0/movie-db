const initialState = {
  movies: [],
  tv: [],
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SET_TV':
      return {
        ...state,
        tv: action.payload,
      };

    default:
      return state;
  }
};

export default items;
