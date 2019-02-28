import React, { Component } from 'react';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './store/actions';
// utils
import client from './client';
// components
import AppBar from './components/AppBar/AppBar';
import Checkboxes from './components/Checkboxes/Checkboxes';
import PokemonList from './components/PokemonList/PokemonList';
import Paginate from './components/Paginate/Paginate';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    categories: [],
    perPage: 12,
    offset: 0,
    loading: false,
    modalIsOpen: false
  };

  componentDidMount = () => {
    this.setState({ loading: true }, this.loadPokemonFromServer);
  };

  loadPokemonFromServer = () => {
    const { perPage, offset, categories } = this.state;
    const query = { limit: perPage, offset, categories };
    client.getAllPokemon(query, this.getAllPokemon);
  };

  getAllPokemon = ({ pokemon, meta }) => {
    this.props.actions.storeAllPokemon({ pokemon });
    this.setState({
      pageCount: Math.ceil(meta.total_count / meta.limit), // for pagination
      loading: false
    });
  };

  handlePageClick = ({ selected }) => {
    const offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset, loading: true }, this.loadPokemonFromServer);
  };

  handleFilterClick = categories => {
    this.setState({ loading: true, categories }, this.loadPokemonFromServer);
  };

  handleModalToggle = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  renderPokemonList = () => {
    const LOADER = <Loader />;
    const POKEMON_LIST = (
      <PokemonList
        history={this.props.history}
        location={this.props.location}
        onModalToggle={this.handleModalToggle}
      />
    );
    return this.state.loading ? LOADER : POKEMON_LIST;
  };

  render = () => {
    const MODAL = <Modal onModalToggle={this.handleModalToggle} />;

    return (
      <div className="app-wrapper">
        {this.state.modalIsOpen ? MODAL : ''}
        <AppBar />
        <button onClick={() => console.log(this.props)}>test</button>
        <div className="container">
          <Checkboxes onFilterClick={this.handleFilterClick} />
          <div className="main">
            {this.renderPokemonList()}
            <Paginate
              pageCount={this.state.pageCount}
              onPageClick={this.handlePageClick}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default connect(
  state => state.pokemon,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
