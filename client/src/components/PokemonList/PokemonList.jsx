import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonListItem from './PokemonListItem';

class PokemonList extends Component {
  render = () => {
    return (
      <div className="pokemon-list" align="center">
        {this.props.pokemon.map(p => (
          <PokemonListItem key={p.id} pokemonItem={p} />
        ))}
      </div>
    );
  };
}

PokemonList.propTypes = {
  pokemon: PropTypes.array
};

export default connect(
  state => state.pokemon,
  null
)(PokemonList);
