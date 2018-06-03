/****** actions *******/
const storePokemon = pokemon => {
  return {
    type: 'POKEMON',
    payload: pokemon
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

export { storePokemon, storeSelectedPokemon, addCategory, removeCategory };
