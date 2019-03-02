import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input } from './../common';
import { actionCreators } from './../../redux/actions';

const CheckboxItem = props => {
  const handleOnChange = async (idx, isChecked) => {
    const { addCategory, removeCategory, setOffset } = props.actions;
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

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(CheckboxItem);
