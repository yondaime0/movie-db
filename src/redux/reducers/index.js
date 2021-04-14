import { combineReducers } from 'redux';

import items from './items';
import filters from './filters';

const rootReducer = combineReducers({
  items,
  filters,
});

export default rootReducer;
