import React, { Component } from 'react';

export default class CategoryListItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="category-form">
        <input
          type="checkbox"
          name={title}
          value={title}
          onClick={e => console.log(e)}
        />
        <span />
        <label htmlFor={title}>{title}</label>
      </div>
    );
  }
}
