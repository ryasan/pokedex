import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCategory, removeCategory } from './../../store/actions';
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
    const { addCategory, removeCategory } = this.props;
    isChecked ? addCategory(title) : removeCategory(title);
    this.props.onFilterClick();
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
      <div className="category-list">
        <h3>Category</h3>
        {categoryList}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addCategory, removeCategory }, dispatch);
};

export default connect(null, mapDispatchToProps)(CategoryList);
