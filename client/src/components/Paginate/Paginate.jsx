import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './../../redux/actions';
import './Paginate.scss';

const Paginate = props => {
  const handlePageClick = async (e, idx) => {
    e.preventDefault();
    await props.setOffset({ idx });
    props.fetchPokemon();
  };

  const { pageCount, currentPage } = props.pagination;

  return (
    <nav>
      <ul className="pagination">
        <li
          className="prev page-item"
          onClick={e => handlePageClick(e, currentPage - 1)}
        >
          prev
        </li>

        {Array(pageCount)
          .fill()
          .map((_, i) => (
            <li
              key={i}
              className={currentPage === i ? 'page-item active' : 'page-item'}
              onClick={e => handlePageClick(e, i)}
            >
              <a className="page-link" href="">
                {i + 1}
              </a>
            </li>
          ))}

        <li
          className="next page-item"
          onClick={e => handlePageClick(e, currentPage + 1)}
        >
          next
        </li>
      </ul>
    </nav>
  );
};

export default connect(
  state => ({ pagination: state.pagination }),
  dispatch => ({
    setOffset: bindActionCreators(actionCreators, dispatch).setOffset
  })
)(Paginate);
