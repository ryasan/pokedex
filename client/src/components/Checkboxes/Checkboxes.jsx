import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CheckboxItem from './CheckboxItem';
import { actionCreators } from './../../redux/actions';
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
          {...props.actions}
        />
      ))}
    </div>
  );
};

Checkboxes.propTypes = {
  categories: PropTypes.array,
  fetchPokemon: PropTypes.func,
  actions: PropTypes.object
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
