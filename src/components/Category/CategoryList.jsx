import React, { Component, Fragment } from 'react';
import CategoryListItem from './CategoryListItem';

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
  render() {
    const categoryList = categories.map((title, i) => (
      <CategoryListItem key={i} title={title} />
    ));
    return <div>{categoryList}</div>;
  }
}
