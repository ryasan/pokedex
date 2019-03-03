import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actionCreators } from './../../redux/actions';
import './Paginate.scss';

const Paginate = props => {
  const handlePageClick = async (e, idx) => {
    e.preventDefault();
    await props.setOffset({ idx });
    props.fetchPokemon();
  };

  const { pageCount, currentPage } = props.pagination;

  const renderPageNums = () => {
    const pageNums = Array(pageCount)
      .fill()
      .map((_, i) => {
        const className = [
          'page-item',
          'page-num',
          currentPage === i ? 'active' : ''
        ].join(' ');

        return (
          <li
            key={i}
            className={className}
            onClick={e => handlePageClick(e, i)}>
            <a className="page-link" href="">
              {i + 1}
            </a>
          </li>
        );
      });

    return pageNums;
  };

  return (
    <nav>
      <ul className="pagination">
        <button
          onClick={e => handlePageClick(e, Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          className="page-item page-button">
          <a className="page-link">prev</a>
        </button>
        {renderPageNums()}
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

Paginate.propTypes = {
  setOffset: PropTypes.func,
  fetchPokemon: PropTypes.func,
  pagination: PropTypes.object
};

export default connect(
  state => ({ pagination: state.pagination }),
  dispatch => ({
    setOffset: bindActionCreators(actionCreators.setOffset, dispatch)
  })
)(Paginate);
