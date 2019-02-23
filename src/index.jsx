import React from 'react';
import { render } from 'react-dom';
import './index.scss';
// redux
import { Provider } from 'react-redux';
import configureStore from './store';
// persist on page refresh
import { PersistGate } from 'redux-persist/integration/react';
// components
import App from './App';

const store = configureStore().store;
const persistor = configureStore().persistor;

const WRAPPED_APP = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
render(WRAPPED_APP, document.getElementById('root'));
