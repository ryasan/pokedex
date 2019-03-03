import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import AppBar from './components/AppBar/AppBar';
import Checkboxes from './components/Checkboxes/Checkboxes';
import PokemonList from './components/PokemonList/PokemonList';
import Paginate from './components/Paginate/Paginate';
import Modal from './components/Modal/Modal';
import Icon from './components/Icons';
import client from './client';
import { actionCreators } from './redux/actions';

class App extends Component {
  componentDidMount = () => {
    this.fetchPokemon();
  };

  fetchPokemon = () => {
    const { search, categories, pagination, actions } = this.props;
    actions.toggleLoading(); // start loader

    const query = {
      search: search,
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
    setPageCount({ totalItems: meta.totalCount }); // page count by dividing total pokemon by page limit
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
            {this.props.ui.loading ? (
              <Icon name="loader" fill="#f00" width="120px" />
            ) : (
              <Fragment>
                <PokemonList />
                <Paginate fetchPokemon={this.fetchPokemon} />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };
}

App.propTypes = {
  categories: PropTypes.array,
  search: PropTypes.string,
  pagination: PropTypes.object,
  actions: PropTypes.object,
  ui: PropTypes.object
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
