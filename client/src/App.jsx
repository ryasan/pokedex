import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      categories: categories
        .filter(({ selected }) => selected)
        .map(({ title }) => title)
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

  handleToggleModal = () => {
    this.props.actions.toggleModal();
  };

  render = () => {
    return (
      <div className="app-wrapper">
        {this.props.ui.modalIsOpen ? <Modal /> : ''}
        <AppBar fetchPokemon={this.fetchPokemon} />
        <div className="container">
          <Checkboxes fetchPokemon={this.fetchPokemon} />
          <div className="main">
            {this.props.ui.loading ? <Loader /> : <PokemonList />}
            <Paginate fetchPokemon={this.fetchPokemon} />
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
