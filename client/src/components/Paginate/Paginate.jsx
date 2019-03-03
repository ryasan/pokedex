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
        <button
          onClick={e => handlePageClick(e, Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          className="page-item page-button">
          <a className="page-link">prev</a>
        </button>

        {Array(pageCount)
          .fill()
          .map((_, i) => (
            <li
              key={i}
              className={currentPage === i ? 'page-item active' : 'page-item'}
              onClick={e => handlePageClick(e, i)}>
              <a className="page-link" href="">
                {i + 1}
              </a>
            </li>
          ))}

        <button
          onClick={e =>
            handlePageClick(e, Math.min(currentPage + 1, pageCount))
          }
          disabled={currentPage === pageCount - 1}
          className="page-item page-button">
          <a className="page-link">next</a>
        </button>
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
