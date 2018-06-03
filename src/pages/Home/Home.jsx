import React, { Component, Fragment } from 'react';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import { storePokemon } from './store/actions';
import { client } from './client';
import AppBar from './../../components/AppBar/AppBar';
import Loader from './../../components/Loader/Loader';

import CategoryList from './../../components/Category/CategoryList';
import MainContent from './../../components/MainContent/MainContent';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      perPage: 12,
      offset: 0,
      loading: false
    };
    this.getAllPokemon     = this.getAllPokemon.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePageClick   = this.handlePageClick.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true }, () => this.loadPokemonFromServer());
  }

  loadPokemonFromServer() {
    const { perPage, offset, categories } = this.state;
    const query = { limit: perPage, categories, offset };
    client.getAllPokemon(this.getAllPokemon, query);
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

  render() {
    const {
      pageCount,
      onPageClick,
      onFilterClick,
      history,
      location
    } = this.props;

    return (
      <Fragment>
        <CategoryList onFilterClick={onFilterClick} />
        <MainContent
          pageCount={pageCount}
          onPageClick={onPageClick}
          history={history}
          location={location}
        />
      </Fragment>
    );
  }
}
