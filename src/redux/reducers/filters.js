const initialState = {
  category: 0,
  sort: 'popular',
  page: 1,
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT') {
    return {
      ...state,
      sort: action.payload,
      page: 1,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
      page: 1,
    };
  }
  if (action.type === 'SET_PAGE_INCREMENT') {
    return {
      ...state,
      page: state.page + 1,
    };
  }
  if (action.type === 'SET_PAGE_DECREMENT') {
    return {
      ...state,
      page: state.page - 1,
    };
  }
  return state;
};

export default filters;
