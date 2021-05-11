const initialState = {
  movies: [],
  tv: [],
  isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        isLoaded: true,
      };
    case "SET_TV":
      return {
        ...state,
        tv: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default items;
