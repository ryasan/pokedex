import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckboxItem from './CheckboxItem';
import { actionCreators } from './../../redux/actions';
import './Checkboxes.scss';

const Checkboxes = props => {
  const handleOnChange = async (idx, isChecked) => {
    const { addCategory, removeCategory, setOffset } = props.actions;
    setOffset({ idx: 0 });
    await (isChecked ? addCategory({ idx }) : removeCategory({ idx }));
    props.fetchPokemon();
  };

  return (
    <div className="checkboxes">
      <h3>Category</h3>
      {props.categories.map(({ title }, i) => (
        <CheckboxItem
          key={i}
          idx={i}
          title={title}
          fetchPokemon={props.fetchPokemon}
          {...props.actions}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addCategory: actionCreators.addCategory,
      removeCategory: actionCreators.removeCategory,
      setOffset: actionCreators.setOffset
    },
    dispatch
  )
});

export default connect(
  state => ({ categories: state.categories }),
  mapDispatchToProps
)(Checkboxes);
