import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './../common';

const CheckboxItem = props => {
  const handleOnChange = async (idx, isChecked) => {
    const { addCategory, removeCategory, setOffset } = props;
    setOffset({ idx: 0 });
    await (isChecked ? addCategory({ idx }) : removeCategory({ idx }));
    props.fetchPokemon();
  };

  return (
    <div className="input-group">
      <Input
        type="checkbox"
        id={props.title}
        onChange={e => handleOnChange(props.idx, e.target.checked)}
      />
      <label htmlFor={props.title}>{props.title}</label>
    </div>
  );
};

CheckboxItem.propTypes = {
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
  setOffset: PropTypes.func,
  fetchPokemon: PropTypes.func,
  title: PropTypes.string,
  idx: PropTypes.number
};

export default CheckboxItem;
