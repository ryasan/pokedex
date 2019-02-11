import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import configureStore from './store/store';
import App from './App';

const store = configureStore().store;
const persistor = configureStore().persistor;

const WRAPPED_APP = (
  <Provider store={store}> // redux
    <PersistGate persistor={persistor}> // persist on page refresh
      <App />
    </PersistGate>
  </Provider>
);
render(WRAPPED_APP, document.getElementById('root'));
