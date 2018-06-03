import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home/Home';
import PokemonDetailsPage from './pages/PokemonDetails/PokemonDetails';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';

export default class App extends Component {
  render() {
    const HomeRoute = (
      <Route exact path="/" render={props => <HomePage {...props} />} />
    );

    const PokemonDetailsRoute = (
      <Route
        path="/:details"
        render={props => <PokemonDetailsPage {...props} />}
      />
    );

    const BreadCrumbsRoute = (
      <Route render={props => <BreadCrumbs {...props} />} />
    );

    return (
      <Fragment>
        <AppBar />
        <BrowserRouter>
          <div className="container">
            <Route render={props => <BreadCrumbs {...props} />} />
            <Route exact path="/" render={props => <HomePage {...props} />} />
            <Route
              path="/:details"
              render={props => <PokemonDetailsPage {...props} />}
            />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
