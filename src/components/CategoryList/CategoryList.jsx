import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Category.scss';
import CategoryListItem from './CategoryListItem';
import categoryHelpers from './CategoryListHelpers';

export default class CategoryList extends Component {
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
    const categoryList = categoryHelpers.categories.map((title, i) => (
      <CategoryListItem
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
