import { STORE_POKEMON, SELECT_POKEMON } from './../actions/actionTypes';

const defaultState = {
  pokemon: [],
  selectedPokemon: ''
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_POKEMON:
      return { ...state, pokemon: payload.pokemon };
    case SELECT_POKEMON:
      return { ...state, selectedPokemon: payload.selectedPokemon };
    default:
      return state;
  }
};
