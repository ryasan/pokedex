import React from 'react';

const Input = ({ id, type, style, className, onChange, placeholder }) => (
  <input
    id={id}
    type={type}
    style={style}
    className={className}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export { Input };
