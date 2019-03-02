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
    this.props.fetchPokemon();
  };

  render = () => {
    const { pageCount } = this.props.pagination;

    return (
      <nav>
        <ul className="pagination">
          {Array(pageCount)
            .fill()
            .map((_, i) => (
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
      onClick={onClick}
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
