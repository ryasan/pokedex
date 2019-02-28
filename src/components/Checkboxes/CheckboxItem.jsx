import React from 'react';
import { Input } from './../common';

const CheckboxItem = ({ title, onChange }) => (
  <div className="input-group">
    <Input
      type="checkbox"
      id={title}
      onChange={e => onChange(title, e.target.checked)}
    />
    <label htmlFor={title}>{title}</label>
  </div>
);

export default CheckboxItem;
