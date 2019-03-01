import { createStore, combineReducers } from 'redux';
import pokemon from './reducers/pokemon';
import categories from './reducers/categories';
import search from './reducers/search';

export default createStore(combineReducers({ pokemon, categories, search }));
