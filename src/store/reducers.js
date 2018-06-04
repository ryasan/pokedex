/****** reducers *******/
module.exports = {
  reducer: {
    pokemonReducer(state = [], action) {
      switch (action.type) {
        case 'POKEMON':
          return action.payload;
        default:
          return state;
      }
    },

    pokemonNameReducer(state = null, action) {
      switch (action.type) {
        case 'POKEMON_NAME':
          return action.payload;
        default:
          return state;
      }
    },

    selectedPokemonReducer(state = null, action) {
      switch (action.type) {
        case 'SELECTED_POKEMON':
          return action.payload;
        default:
          return state;
      }
    },

    categoriesReducer(state = [], action) {
      switch (action.type) {
        case 'ADD_CATEGORY':
          return state.concat(action.payload);
        case 'REMOVE_CATEGORY':
          return state.filter(t => t !== action.payload);
        default:
          return state;
      }
    }
  }
};
