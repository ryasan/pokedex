import { createStore, combineReducers } from 'redux';

// actions
const storePokemon = pokemon => {
  return {
    type: 'POKEMON',
    payload: pokemon
  };
};
// reducers
const storePokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'POKEMON':
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  pokemon: storePokemonReducer
});

const store = createStore(allReducers);

export { store, storePokemon };
