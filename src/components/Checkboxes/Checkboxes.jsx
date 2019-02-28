import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckboxItem from './CheckboxItem';
import { actionCreators } from './../../actions';
import './Checkboxes.scss';

class Checkboxes extends Component {
  handleOnChange = (idx, isChecked) => {
    const { addCategory, removeCategory } = this.props.actions;
    isChecked ? addCategory({ idx }) : removeCategory({ idx });
    this.props.fetchPokemon();
  };

  render = () => {
    return (
      <div className="checkboxes">
        <h3>Category</h3>
        {this.props.categories.map(({ title }, i) => (
          <CheckboxItem
            key={i}
            idx={i}
            title={title}
            onChange={this.handleOnChange}
          />
        ))}
      </div>
    );
  };
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Checkboxes);
