import { STORE_ALL_POKEMON, SELECT_POKEMON } from './actionTypes';
import { createAction } from './../utils';

const storeAllPokemon = payload => createAction(STORE_ALL_POKEMON, payload);
const selectPokemon = payload => createAction(SELECT_POKEMON, payload);

export const actionCreators = {
  storeAllPokemon,
  selectPokemon
};
