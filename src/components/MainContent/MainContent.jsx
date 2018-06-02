import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PokemonList from './../Pokemon/PokemonList';
import './MainContent.scss'

export default class MainContent extends Component {
  render() {
    const { pageCount, onPageClick, history, location } = this.props;
    return (
      <div className="main-content">
        <PokemonList history={history} location={location} />
        <ReactPaginate previousLabel="previous"
                       previousLinkClassName="previous-link"
                       nextLabel="next"
                       nextLinkClassName="next-link"
                       breakLabel={<a href="">...</a>}
                       breakClassName="break-me"
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={data => onPageClick(data)}
                       containerClassName="pagination"
                       pageClassName="page"
                       subContainerClassName="pages pagination"
                       activeClassName="active"
        />
      </div>
    );
  }
}
