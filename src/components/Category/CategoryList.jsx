import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import './Category.scss';

const categories = [
  'Grass',
  'Poison',
  'Fire',
  'Flying',
  'Water',
  'Bug',
  'Normal',
  'Electric',
  'Ground',
  'Fighting',
  'Psychic',
  'Rock',
  'Ice',
  'Ghost',
  'Dragon'
];

export default class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      filteredCategories: []
    };
  }

  handleCheckBoxClick(title, isChecked) {
    const { filteredCategories } = this.state;
    const index = filteredCategories.indexOf(title);
    isChecked ? filteredCategories.push(title) : filteredCategories.splice(index, 1);
    this.props.onFilterClick(filteredCategories);
  }

  render() {

    const categoryList = categories.map((title, i) => (
      <CategoryListItem key={i}
                        title={title}
                        onCheckBoxClick={this.handleCheckBoxClick.bind(this)} /> ));

    return (
      <div className="category-container">
        <h3>Category</h3>
        {categoryList}
      </div>
    );
  }
}
