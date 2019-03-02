import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonListItem from './PokemonListItem';

const PokemonList = props => (
  <div className="pokemon-list" align="center">
    {props.pokemon.map(p => (
      <PokemonListItem key={p.id} pokemonItem={p} />
    ))}
  </div>
);

PokemonList.propTypes = {
  pokemon: PropTypes.array
};

export default connect(
  state => state.pokemon,
  null
)(PokemonList);
