import { STORE_ALL_POKEMON, SELECT_POKEMON } from './actionTypes';

const INITIAL_STATE = {
  pokemon: [],
  selectedPokemon: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_ALL_POKEMON:
      return { ...state, pokemon: payload.pokemon };
    case SELECT_POKEMON:
      return { ...state, selectedPokemon: payload.selectedPokemon };
    default:
      return state;
  }
};
