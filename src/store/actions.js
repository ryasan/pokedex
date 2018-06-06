/****** actions *******/
const storePokemon = pokemon => {
  return {
    type: 'POKEMON',
    payload: pokemon
  };
};

const storePokemonName = pokemonName => {
  return {
    type: 'POKEMON_NAME',
    payload: pokemonName
  };
};

const storeSelectedPokemon = selectedPokemon => {
  return {
    type: 'SELECTED_POKEMON',
    payload: selectedPokemon
  };
};

export { storePokemon, storePokemonName, storeSelectedPokemon };
