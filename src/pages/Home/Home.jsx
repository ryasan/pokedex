import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storePokemon } from './../../store/actions';
import { client } from './../../client';
import AppBar from './../../components/AppBar/AppBar';
import Loader from './../../components/Loader/Loader';
import CategoryList from './../../components/Category/CategoryList';
import MainContent from './../../components/MainContent/MainContent';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

class HomePage extends Component {
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
    this.setState({
      isModalOpen: true
    })
  }

  render() {
    const MODAL = <div>
      <div className="backdrop"></div>
      <PokemonDetails />
    </div>

    return (
      <Fragment>
        {this.state.isModalOpen ? MODAL : ''}
        <CategoryList onFilterClick={this.handleFilterClick} />
        <MainContent pageCount={this.state.pageCount}
          loading={this.state.loading}
          onPageClick={this.handlePageClick}
          history={this.props.history}
          location={this.props.location}
          onModalToggle={this.handleModalToggle} />
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);