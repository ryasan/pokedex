import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducers';

/****** store *******/
const allReducers = combineReducers({
  pokemon: reducer.pokemonReducer,
  categories: reducer.categoriesReducer,
  selectedPokemon: reducer.selectedPokemonReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default () => {
  const store     = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
