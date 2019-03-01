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
import { actionCreators } from './actions';
import client from './client';
import { ITEMS_PER_PAGE } from './constants';

class App extends Component {
  state = {
    offset: 0,
    pageCount: 0,
    loading: false,
    modalIsOpen: false
  };

  componentDidMount = () => {
    this.setState({ loading: true }, this.fetchPokemon);
  };

  fetchPokemon = () => {
    const { offset } = this.state;
    const { search } = this.props;
    const categories = this.props.categories
      .filter(({ selected }) => selected)
      .map(({ title }) => title);
    const query = { limit: ITEMS_PER_PAGE, offset, categories, search };

    client.fetchPokemon(query, this.storePokemon);
  };

  storePokemon = ({ pokemon, meta }) => {
    this.props.actions.storeAllPokemon({ pokemon });
    this.setState({
      pageCount: Math.ceil(meta.total_count / meta.limit), // for pagination
      loading: false
    });
  };

  handlePageClick = ({ selected }) => {
    const offset = Math.ceil(selected * ITEMS_PER_PAGE);
    this.setState({ offset, loading: true }, this.fetchPokemon);
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render = () => {
    const { modalIsOpen, loading, pageCount } = this.state;

    return (
      <div className="app-wrapper">
        {modalIsOpen ? <Modal onModalToggle={this.handleModalToggle} /> : ''}
        <AppBar fetchPokemon={this.fetchPokemon} />
        <div className="container">
          <Checkboxes fetchPokemon={this.fetchPokemon} />
          <div className="main">
            {loading ? <Loader /> : <PokemonList toggleModal={this.toggleModal} />}
            <Paginate
              pageCount={pageCount}
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
