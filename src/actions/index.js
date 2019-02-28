import {
  STORE_ALL_POKEMON,
  SELECT_POKEMON,
  ADD_CATEGORY,
  REMOVE_CATEGORY
} from './actionTypes';
import { createAction } from '../utils';

const storeAllPokemon = payload => createAction(STORE_ALL_POKEMON, payload);
const selectPokemon   = payload => createAction(SELECT_POKEMON, payload);
const addCategory     = payload => createAction(ADD_CATEGORY, payload);
const removeCategory  = payload => createAction(REMOVE_CATEGORY, payload);

export const actionCreators = {
  storeAllPokemon,
  selectPokemon,
  addCategory,
  removeCategory
};
