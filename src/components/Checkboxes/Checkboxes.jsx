import React, { Component } from 'react';
import './Checkboxes.scss';
import checkboxesHelpers from './CheckboxesHelpers';
// components
import CheckboxItem from './CheckboxItem';

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
    const checkboxes = checkboxesHelpers.categories.map((title, i) => (
      <CheckboxItem
        key={i}
        title={title}
        onChange={this.handleOnChange}
      />
    ));

    return (
      <div className="checkboxes">
        <h3>Category</h3>
        {checkboxes}
      </div>
    );
  };
}

export default Checkboxes;
