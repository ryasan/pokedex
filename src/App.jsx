import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home/Home';
import PokemonDetailsPage from './pages/PokemonDetails/PokemonDetails';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <div className="container">
          <HomePage />
        </div>
      </Fragment>
    );
  }
}
