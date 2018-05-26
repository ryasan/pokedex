import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCategories } from './../../store';
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

class CategoryList extends Component {
  handleCheckBoxClick(title, isChecked) {
    const { categories } = this.props;
    const index = categories.indexOf(title);
    isChecked ? categories.push(title) : categories.splice(index, 1);
    this.props.onFilterCategory(categories);
  }

  render() {
    const categoryList = categories.map((title, i) => (
      <CategoryListItem
        key={i}
        title={title}
        onCheckBoxClick={this.handleCheckBoxClick.bind(this)}
      />
    ));

    return (
      <div className="category-container">
        <h3>Category</h3>
        {categoryList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectCategories }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
