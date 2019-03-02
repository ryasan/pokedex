import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './../../redux/actions';
import './Paginate.scss';

class Paginate extends Component {
  state = {
    activeIdx: 0
  };

  handlePageClick = async idx => {
    await this.props.actions.setOffset({ idx });
    await this.setState({ activeIdx: idx });

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
              activeIdx={this.state.activeIdx}
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
      onClick={() => onClick(idx)}
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
