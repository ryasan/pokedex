import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { client } from './client';
import './App.scss';
import AppBar from './components/Globals/AppBar';
import CategoryList from './components/Category/CategoryList';
import PokemonList from './components/Pokemon/PokemonList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      categories: [],
      perPage: 12,
      offset: 0
    };
  }

  componentDidMount() {
    this.loadPokemonFromServer();
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
        pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
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
    return (
      <Fragment>
        <AppBar />
        <div className="container">
          <CategoryList onFilterCategory={this.handleFilterClick.bind(this)} />
          <div className="main-content">
            <PokemonList pokemon={this.state.pokemon} />
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel={<a href="">...</a>}
              breakClassName="break-me"
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={data => this.handlePageClick(data)}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
