import React, { Component, Fragment } from 'react';

export default class CategoryListItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <Fragment>
        <label className="category-form">
          {title}
          <input
            type="checkbox"
            name={title}
            value={title}
            onClick={e => console.log(e)}
          />
          <span className="checkmark" />
        </label>
      </Fragment>
    );
  }
}
