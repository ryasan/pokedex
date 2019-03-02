import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './../../redux/actions';
import { ITEMS_PER_PAGE } from "./../../constants";
import './Paginate.scss';

class Paginate extends Component {
  handlePageClick = async ({ selected }) => {
    await this.props.actions.setOffset({ offset: selected * ITEMS_PER_PAGE });
    this.props.fetchPokemon();
  };

  render = () => {
    return (
      <ReactPaginate
        previousLabel="previous"
        previousLinkClassName="previous-link"
        nextLabel="next"
        nextLinkClassName="next-link"
        breakLabel={<a>...</a>}
        breakClassName="break-me"
        pageCount={this.props.pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={data => this.handlePageClick(data)}
        containerClassName="pagination"
        pageClassName="page"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    );
  };
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Paginate);
