import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';
import App from './App';

const AppWithStore = (
  <Provider store={store}>
    <App perPage={10} />
  </Provider>
);

render(AppWithStore, document.getElementById('root'));
