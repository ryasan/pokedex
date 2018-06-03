import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import { storePokemon } from './store/actions';
import { client } from './client';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import HomePage from './pages/Home/Home';
import PokemonDetailsPage from './pages/PokemonDetails/PokemonDetails';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      perPage: 12,
      offset: 0,
      loading: false
    };
    this.getAllPokemon     = this.getAllPokemon.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePageClick   = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true }, () => this.loadPokemonFromServer());
  }

  loadPokemonFromServer() {
    const { perPage, offset } = this.state;
    const query = { limit: perPage, categories: this.props.categories, offset };
    client.getAllPokemon(this.getAllPokemon, query);
  }

  getAllPokemon(data) {
    this.props.storePokemon(data.pokemon);
    this.setState({
      pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
      loading: false
    });
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset, loading: true }, () => this.loadPokemonFromServer());
  }

  handleFilterClick() {
    this.setState({ loading: true }, () => this.loadPokemonFromServer());
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
            pageCount={pageCount}
            perPage={perPage}
            onPageClick={this.handlePageClick}
            onFilterClick={this.handleFilterClick}
          />
        )}
      />
    );

    const PokemonDetailsRoute = (
      <Route
        path="/details"
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
            {BreadCrumbsRoute}
            {HomeRoute}
            {PokemonDetailsRoute}
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storePokemon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
