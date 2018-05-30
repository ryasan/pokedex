import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { client } from './client';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import HomePage from './pages/Home';
import PokemonDetailsPage from './pages/PokemonDetails';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      categories: [],
      perPage: 12,
      offset: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => this.loadPokemonFromServer());
  }

  loadPokemonFromServer() {
    const { perPage, offset, categories } = this.state;
    const query = {
      limit: perPage,
      offset,
      categories
    };
    client.getAllPokemon(data => {
      this.setState({
        pokemon: data.pokemon,
        pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
        loading: false
      });
    }, query);
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset: offset, loading: true }, () =>
      this.loadPokemonFromServer()
    );
  }

  handleFilterClick(categories) {
    this.setState({ categories, loading: true }, () =>
      this.loadPokemonFromServer()
    );
  }

  render() {
    const { pokemon, pageCount, perPage, loading } = this.state;
    const HomeRoute = (
      <Route
        exact
        path="/"
        render={props => (
          <HomePage
            {...props}
            pokemon={pokemon}
            pageCount={pageCount}
            perPage={perPage}
            onPageClick={this.handlePageClick.bind(this)}
            onFilterClick={this.handleFilterClick.bind(this)}
          />
        )}
      />
    );

    const PokemonDetailsRoute = (
      <Route path="/details" component={PokemonDetailsPage} />
    );

    const BreadCrumbsRoute = (
      <Route render={props => <BreadCrumbs {...props} />} />
    );

    return (
      <Fragment>
        <AppBar />
        <BrowserRouter>
          <div className="container">
            {BreadCrumbsRoute}
            {HomeRoute}
            {PokemonDetailsRoute}
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
