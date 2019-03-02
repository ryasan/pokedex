import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './../../redux/actions';
import './Paginate.scss';

class Paginate extends Component {
  handlePageClick = async (e,idx) => {
    e.preventDefault();
    await this.props.actions.setOffset({ idx });
    this.props.fetchPokemon();
  };

  generateRange = () => {
    const { pageCount } = this.props.pagination;
    const range = [];
    for (let i = 0; i < pageCount; i++) {
      range.push(i);
    }
    return range;
  };

  render = () => {
    return (
      <nav>
        <ul className="pagination">
          {this.generateRange().map(i => (
            <PaginateItem
              key={i}
              idx={i}
              activeIdx={this.props.pagination.currentPage}
              onClick={this.handlePageClick}
            />
          ))}
        </ul>
      </nav>
    );
  };
}

const PaginateItem = ({ idx, activeIdx, onClick }) => {
  return (
    <li
      className={activeIdx === idx ? 'page-item active' : 'page-item'}
      onClick={(e) => onClick(e, idx)}
    >
      <a className="page-link" href="">
        {idx + 1}
      </a>
    </li>
  );
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Paginate);
