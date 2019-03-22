import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id = '',
  type = 'text',
  style = {},
  className = '',
  placeholder = '',
  onChange = () => {}
}) => (
  <input
    id={id}
    type={type}
    style={style}
    className={className}
    onChange={onChange}
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
