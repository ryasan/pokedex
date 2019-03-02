import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from './../../redux/actions';
import './Pokemon.scss';

const PokemonListItem = props => {
  const handleClick = selectedPokemon => {
    const { selectPokemon, toggleModal } = props.actions;
    selectPokemon({ selectedPokemon });
    toggleModal();
  };

  const { pokemonItem } = props;

  return (
    <div className="card" onClick={() => handleClick(pokemonItem.name)}>
      {pokemonItem.name}
      <img src={pokemonItem.imageUrl} alt={`img-${pokemonItem.name}`} />
    </div>
  );
};

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(PokemonListItem);
