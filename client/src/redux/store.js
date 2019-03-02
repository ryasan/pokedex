import { createStore, combineReducers } from 'redux';
import pokemon from './reducers/pokemon';
import categories from './reducers/categories';
import search from './reducers/search';
import pagination from './reducers/pagination';
import ui from './reducers/ui';

export default createStore(
  combineReducers({
    pokemon,
    categories,
    search,
    pagination,
    ui
  })
);
