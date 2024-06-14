import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filters';
import itemReducer from '../reducers/items';

const configureStore= () => {
  const store = createStore(
    combineReducers({
      items: itemReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
const store = configureStore();

export default store;