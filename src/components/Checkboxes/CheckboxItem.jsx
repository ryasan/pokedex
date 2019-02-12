import React, { Component } from 'react';

export default class CheckboxItem extends Component {
  render() {
    const { title, onCheckBoxClick } = this.props;

    return (
      <div className="input-group">
        <input
          type="checkbox"
          id={title}
          name={title}
          value={title}
          onChange={e => onCheckBoxClick(title, e.target.checked)}
        />
        <label htmlFor={title}>{title}</label>
      </div>
    );
  }
}
