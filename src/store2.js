import { createStore, combineReducers } from 'redux';

// actions
const storePokemon = pokemon => {
  return {
    type: 'POKEMON',
    payload: pokemon
  };
};

const selectCategories = pokemon => {
  return {
    type: 'FILTERED_POKEMON',
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

const selectCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTERED_POKEMON':
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  pokemon: storePokemonReducer,
  categories: selectCategoriesReducer
});

const store = createStore(allReducers);

export { store, storePokemon, selectCategories };
