import {
  STORE_ALL_POKEMON,
  SELECT_POKEMON,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SEARCH_TERM
} from './actionTypes';
import { createAction } from '../utils';

const storeAllPokemon = payload => createAction(STORE_ALL_POKEMON, payload);
const selectPokemon   = payload => createAction(SELECT_POKEMON, payload);
const addCategory     = payload => createAction(ADD_CATEGORY, payload);
const removeCategory  = payload => createAction(REMOVE_CATEGORY, payload);
const searchTerm      = payload => createAction(SEARCH_TERM, payload);

export const actionCreators = {
  storeAllPokemon,
  selectPokemon,
  addCategory,
  removeCategory,
  searchTerm
};
