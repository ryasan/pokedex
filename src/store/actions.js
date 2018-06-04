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

const addCategory = category => {
  return {
    type: 'ADD_CATEGORY',
    payload: category
  };
};

const removeCategory = category => {
  return {
    type: 'REMOVE_CATEGORY',
    payload: category
  };
};

export {
  storePokemon,
  storePokemonName,
  storeSelectedPokemon,
  addCategory,
  removeCategory
};
