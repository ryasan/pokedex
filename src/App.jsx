import React, { Component, Fragment } from 'react';
import './App.scss';
import { client } from './client';
import CategoryList from './components/Category/CategoryList';
import MainContent from './components/MainContent/MainContent';
import AppBar from './components/Ui/AppBar';
import Loader from './components/Ui/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      categories: [],
      perPage: 12,
      offset: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => this.loadPokemonFromServer(), 500);
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
    this.setState({ offset: offset }, () => this.loadPokemonFromServer());
  }

  handleFilterClick(categories) {
    this.setState({ categories }, () => this.loadPokemonFromServer());
  }

  render() {
    const { pokemon, pageCount } = this.state;
    const mainContent = (
      <MainContent
        pokemon={pokemon}
        pageCount={pageCount}
        onPageClick={this.handlePageClick.bind(this)}
      />
    );
    const loader = <Loader />;

    return (
      <Fragment>
        <AppBar />
        <div className="container">
          <CategoryList onFilterCategory={this.handleFilterClick.bind(this)} />
          {this.state.loading ? loader : mainContent}
        </div>
      </Fragment>
    );
  }
}
