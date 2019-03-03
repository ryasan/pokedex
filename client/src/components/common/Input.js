import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  debounceTimeout: PropTypes.number,
  onChange: PropTypes.func
};

export { Input };
