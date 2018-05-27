import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PokemonList from './../Pokemon/PokemonList';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <PokemonList pokemon={this.props.pokemon} />
        <ReactPaginate previousLabel="previous"
                       previousLinkClassName="previous-link"
                       nextLabel="next"
                       nextLinkClassName="next-link"
                       breakLabel={<a href="">...</a>}
                       breakClassName="break-me"
                       pageCount={this.props.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={data => this.props.onPageClick(data)}
                       containerClassName="pagination"
                       pageClassName="page"
                       subContainerClassName="pages pagination"
                       activeClassName="active"
        />
      </div>
    );
  }
}
