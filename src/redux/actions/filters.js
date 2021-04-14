export const setSort = (type) => ({
  type: 'SET_SORT',
  payload: type,
});
export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
export const setPageIncrement = () => ({
  type: 'SET_PAGE_INCREMENT',
});
export const setPageDecrement = () => ({
  type: 'SET_PAGE_DECREMENT',
});
