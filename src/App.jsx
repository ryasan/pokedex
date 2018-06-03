import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home/Home';
import PokemonDetailsPage from './pages/PokemonDetails/PokemonDetails';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <BrowserRouter>
          <div className="container">
            <Route component={BreadCrumbs} />
            <Route exact path="/" component={HomePage} />
            <Route path="/:details" component={PokemonDetailsPage} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
