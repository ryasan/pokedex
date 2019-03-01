import { createStore, combineReducers } from 'redux';
import pokemon from './pokemon';
import categories from './categories';
import search from './search';

export default createStore(combineReducers({ pokemon, categories, search }));
