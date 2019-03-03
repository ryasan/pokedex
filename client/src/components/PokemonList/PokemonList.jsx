import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actionCreators } from './../../redux/actions';
import './Pokemon.scss';

const PokemonList = props => {
  const handleClick = selectedPokemon => {
    const { selectPokemon, toggleModal } = props.actions;
    selectPokemon({ selectedPokemon });
    toggleModal();
  };

  return (
    <ul className="pokemon-list" align="center">
      {props.pokemon.map(p => (
        <li key={p.id} className="card" onClick={() => handleClick(p.name)}>
          {p.name}
          <img src={p.imageUrl} alt={`img-${p.name}`} />
        </li>
      ))}
    </ul>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.array
};

export default connect(
  state => state.pokemon,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(PokemonList);
