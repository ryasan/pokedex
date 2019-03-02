import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const Input = ({
  id = '',
  type = 'text',
  style = {},
  className = '',
  placeholder = '',
  minLength = 0,
  debounceTimeout = 0,
  onChange = () => {}
}) => (
  <DebounceInput
    id={id}
    type={type}
    style={style}
    className={className}
    onChange={onChange}
    minLength={minLength}
    debounceTimeout={debounceTimeout}
    placeholder={placeholder}
  />
);

export { Input };
