import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import PokemonList from './../components/Pokemon/PokemonList';
import CategoryList from './../components/Category/CategoryList';
import MainContent from './../components/MainContent/MainContent';

export default class HomePage extends Component {
  render() {
    const {
      pokemon,
      pageCount,
      onPageClick,
      onFilterClick
    } = this.props;

    return (
      <Fragment>
        <CategoryList onFilterClick={onFilterClick} />
        <MainContent
          pokemon={pokemon}
          pageCount={pageCount}
          onPageClick={onPageClick}
        />
      </Fragment>
    );
  }
}
