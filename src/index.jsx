import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from './store';
import App from './App';

const WRAPPED_APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(WRAPPED_APP, document.getElementById('root'));
