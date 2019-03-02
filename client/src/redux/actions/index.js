import {
  STORE_POKEMON,
  SELECT_POKEMON,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SEARCH_TERM,
  SET_OFFSET,
  SET_PAGE_COUNT,
  TOGGLE_LOADING,
  TOGGLE_MODAL
} from './actionTypes';
import { createAction } from './../../utils';

const storeAllPokemon = payload => createAction(STORE_POKEMON, payload);
const selectPokemon   = payload => createAction(SELECT_POKEMON, payload);
const addCategory     = payload => createAction(ADD_CATEGORY, payload);
const removeCategory  = payload => createAction(REMOVE_CATEGORY, payload);
const searchTerm      = payload => createAction(SEARCH_TERM, payload);
const setOffset       = payload => createAction(SET_OFFSET, payload);
const setPageCount    = payload => createAction(SET_PAGE_COUNT, payload);
const toggleLoading   = () => createAction(TOGGLE_LOADING);
const toggleModal     = () => createAction(TOGGLE_MODAL);

export const actionCreators = {
  storeAllPokemon,
  selectPokemon,
  addCategory,
  removeCategory,
  searchTerm,
  setOffset,
  setPageCount,
  toggleLoading,
  toggleModal
};
