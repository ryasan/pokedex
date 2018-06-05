import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './MainContent.scss';
import PokemonList from './../PokemonList/PokemonList';
import Loader from './../Loader/Loader';

export default class MainContent extends Component {
  render() {
    const { pageCount, onPageClick, history, location, loading } = this.props;
    const POKEMON_LIST = <PokemonList history={history} location={location} />;
    const LOADER = <Loader />
    return (
      <div className="main-content">
        {loading ? LOADER : POKEMON_LIST}
        <ReactPaginate previousLabel="previous"
                       previousLinkClassName="previous-link"
                       nextLabel="next"
                       nextLinkClassName="next-link"
                       breakLabel={<a>...</a>}
                       breakClassName="break-me"
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={data => onPageClick(data)}
                       containerClassName="pagination"
                       pageClassName="page"
                       subContainerClassName="pages pagination"
                       activeClassName="active" />
      </div>
    );
  }
}
