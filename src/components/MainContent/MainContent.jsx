import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import './MainContent.scss';
import PokemonList from './../PokemonList/PokemonList';
import Loader from './../Loader/Loader';

export default class MainContent extends Component {
  render() {
    const { pageCount, onPageClick, history, location, loading, onModalToggle } = this.props;
    const CONTENT = (
      <Fragment>
        <PokemonList
          history={history}
          location={location}
          onModalToggle={onModalToggle}
        />
        <ReactPaginate
          previousLabel="previous"
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
          activeClassName="active"
        />
      </Fragment>
    );
    const LOADER = <Loader />;

    return <div className="main-content">{loading ? LOADER : CONTENT}</div>;
  }
}
