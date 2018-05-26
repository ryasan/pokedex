import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storePokemon } from './store';
import { client } from './client';
import './App.scss';
import AppBar from './components/Globals/AppBar';
import CategoryList from './components/Category/CategoryList';
import PokemonList from './components/Pokemon/PokemonList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      offset: 0,
      selectedCategories: []
    };
  }

  componentDidMount() {
    this.loadPokemonFromServer();
  }

  loadPokemonFromServer() {
    const query = {
      limit: this.props.perPage,
      offset: this.state.offset
    };

    client.getAllPokemon(data => {
      this.setState({
        pokemon: data.pokemon,
        pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
      });
      this.props.storePokemon(data);
    }, query);
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.props.perPage);
    this.setState({ offset: offset }, () => this.loadPokemonFromServer());
  }

  handleFilterCategory() {
    console.log('filter category');
  }

  render() {
    return (
      <Fragment>
        <AppBar />
        <div className="container">
          <CategoryList onFilterCategory={this.handleFilterCategory} />
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

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storePokemon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
