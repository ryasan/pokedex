import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckboxItem from './CheckboxItem';
import checkboxesHelpers from './CheckboxesHelpers';
import './Checkboxes.scss';

class Checkboxes extends Component {
  state = {
    categories: []
  };

  handleOnChange = (title, isChecked) => {
    const { categories } = this.state;
    isChecked
      ? categories.push(title)
      : categories.splice(categories.indexOf(title), 1);
    this.props.onFilterClick(categories);
  };

  render = () => {
    return (
      <div className="checkboxes">
        <h3>Category</h3>
        {this.props.categories.map(({ title }, i) => (
          <CheckboxItem key={i} title={title} onChange={this.handleOnChange} />
        ))}
      </div>
    );
  };
}

export default connect(
  state => state,
  null
)(Checkboxes);
