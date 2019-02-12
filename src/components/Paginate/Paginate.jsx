import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './Paginate.scss';

class Paginate extends Component {
  render() {
    return (
      <ReactPaginate
        previousLabel="previous"
        previousLinkClassName="previous-link"
        nextLabel="next"
        nextLinkClassName="next-link"
        breakLabel={<a>...</a>}
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
    );
  }
}

export default Paginate;