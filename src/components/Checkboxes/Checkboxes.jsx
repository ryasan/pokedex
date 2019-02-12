import React, { Component } from 'react';
import './Checkboxes.scss';
import CheckboxItem from './CheckboxItem';
import checkboxesHelpers from './CheckboxesHelpers';

export default class Checkboxes extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  handleCheckBoxClick(title, isChecked) {
    const { categories } = this.state;
    isChecked
      ? categories.push(title)
      : categories.splice(categories.indexOf(title), 1);
    this.props.onFilterClick(categories);
  }

  render() {
    const categoryList = checkboxesHelpers.categories.map((title, i) => (
      <CheckboxItem
        key={i}
        title={title}
        onCheckBoxClick={this.handleCheckBoxClick.bind(this)}
      />
    ));

    return (
      <div className="category-list">
        <h3>Category</h3>
        {categoryList}
      </div>
    );
  }
}
