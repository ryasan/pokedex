import React from 'react';
import { connect } from 'react-redux';

import CheckboxItem from './CheckboxItem';
import './Checkboxes.scss';

const Checkboxes = props => {
  return (
    <div className="checkboxes">
      <h3>Category</h3>
      {props.categories.map(({ title }, i) => (
        <CheckboxItem
          key={i}
          idx={i}
          title={title}
          fetchPokemon={props.fetchPokemon}
        />
      ))}
    </div>
  );
};

export default connect(
  state => ({ categories: state.categories }),
  null
)(Checkboxes);
