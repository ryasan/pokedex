import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
<<<<<<< HEAD
import PropTypes from 'prop-types';

=======
import { storePokemon } from './store/actions';
import { client } from './client';
>>>>>>> 0b9be8b48ffe49a9e2eaebb952b29d61ba61f882
import AppBar from './components/AppBar/AppBar';
import Checkboxes from './components/Checkboxes/Checkboxes';
import PokemonList from './components/PokemonList/PokemonList';
import Paginate from './components/Paginate/Paginate';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import { actionCreators } from './actions';
import client from './client';

class App extends Component {
  state = {
    perPage: 12,
    offset: 0,
    loading: false,
    modalIsOpen: false
  };

  componentDidMount = () => {
    this.setState({ loading: true }, this.fetchPokemon);
  };

  fetchPokemon = () => {
    const { perPage, offset } = this.state;
    const { search } = this.props;
    const categories = this.props.categories
      .filter(({ selected }) => selected)
      .map(({ title }) => title);
    const query = { limit: perPage, offset, categories, search };

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
    const offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset, loading: true }, this.fetchPokemon);
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
        <AppBar fetchPokemon={this.fetchPokemon} />
        <div className="container">
          <Checkboxes fetchPokemon={this.fetchPokemon} />
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

App.propTypes = {
  categories: PropTypes.array
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
