import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storePokemon } from './store/actions';
import { client } from './client';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import CategoryList from './components/CategoryList/CategoryList';
import PokemonList from './components/PokemonList/PokemonList';
import Paginate from './components/Paginate/Paginate';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      perPage: 12,
      offset: 0,
      loading: false,
      isModalOpen: false
    };
    this.getAllPokemon     = this.getAllPokemon.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePageClick   = this.handlePageClick.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true }, () => this.loadPokemonFromServer());
  }

  loadPokemonFromServer() {
    const { perPage, offset, categories } = this.state;
    const query = { limit: perPage, offset, categories };
    client.getAllPokemon(query, this.getAllPokemon);
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

  handleFilterClick(categories) {
    this.setState({ loading: true, categories }, () => this.loadPokemonFromServer());
  }

  handleModalToggle() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    const MODAL = <Modal onModalToggle={this.handleModalToggle} />;

    return (
      <div className="app-wrapper">
        {this.state.isModalOpen ? MODAL : ''}
        <AppBar />
        <div className="container">
          <CategoryList onFilterClick={this.handleFilterClick} />
          <div className="main">
          <PokemonList
            history={this.props.history}
            location={this.props.location}
            onModalToggle={this.handleModalToggle}
          />
          <Paginate
            pageCount={this.state.pageCount}
            onPageClick={this.handlePageClick}
          />
          </div>
        </div>
      </div>
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
