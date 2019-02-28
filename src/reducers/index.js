import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemon from './pokemon';
import categories from './categories';

const allReducers = combineReducers({ pokemon, categories });

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
