import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from './components/AppBar/AppBar';
import Checkboxes from './components/Checkboxes/Checkboxes';
import PokemonList from './components/PokemonList/PokemonList';
import Paginate from './components/Paginate/Paginate';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import { actionCreators } from './redux/actions';
import client from './client';
import { ITEMS_PER_PAGE } from './constants';

class App extends Component {
  state = {
    loading: false,
    modalIsOpen: false
  };

  componentDidMount = () => {
    this.fetchPokemon();
  };

  fetchPokemon = () => {
    let { search, categories, pagination, actions } = this.props;
    actions.toggleLoading(); // start loader

    const query = {
      search: search,
      limit: ITEMS_PER_PAGE,
      offset: pagination.offset,
      categories: categories.filter(({ selected }) => selected).map(({ title }) => title)
    };

    client.fetchPokemon(query, this.storePokemon);
  };

  storePokemon = ({ pokemon, meta }) => {
    const { storeAllPokemon, setPageCount, toggleLoading } = this.props.actions;
    storeAllPokemon({ pokemon });
    setPageCount({
      pageCount: meta.totalCount / meta.limit
    });
    toggleLoading(); // end loader
  };

  handlePageClick = async ({ selected }) => {
    await this.props.actions.setOffset({ offset: selected * ITEMS_PER_PAGE });
    this.fetchPokemon();
  };

  handleToggleModal = () => {
    this.props.actions.toggleModal();
  };

  render = () => {
    const { modalIsOpen, loading } = this.props.ui;

    return (
      <div className="app-wrapper">
        {modalIsOpen ? <Modal toggleModal={this.handleToggleModal} /> : ''}
        <AppBar fetchPokemon={this.fetchPokemon} />
        <div className="container">
          <Checkboxes fetchPokemon={this.fetchPokemon} />
          <div className="main">
            {loading ? (
              <Loader />
            ) : (
              <PokemonList toggleModal={this.handleToggleModal} />
            )}
            <Paginate
              pageCount={this.props.pagination.pageCount}
              onPageClick={this.handlePageClick}
            />
          </div>
        </div>
      </div>
    );
  };
}

App.propTypes = {
  categories: PropTypes.array
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
