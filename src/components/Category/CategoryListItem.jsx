import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class CategoryListItem extends Component {
  render() {

    const { title, onCheckBoxClick } = this.props;

    return (
      <Fragment>
        <label className="category-form">
          {title}
          <input
            type="checkbox"
            name={title}
            value={title}
            onChange={e => onCheckBoxClick(title, e.target.checked)}
          />
          <span className="checkmark" />
        </label>
      </Fragment>
    );
  }
}
