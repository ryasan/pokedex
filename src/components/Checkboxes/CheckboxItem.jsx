import React, { Component } from 'react';
import { Input } from './../common';

class CheckboxItem extends Component {
  render() {
    const { title, onCheckBoxClick } = this.props;

    return (
      <div className="input-group">
        <Input
          type="checkbox"
          id={title}
          onChange={e => onCheckBoxClick(title, e.target.checked)}
        />
        <label htmlFor={title}>{title}</label>
      </div>
    );
  }
}

export default CheckboxItem;
