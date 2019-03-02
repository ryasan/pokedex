import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonListItem from './PokemonListItem';

class PokemonList extends Component {
  
  render = () => {
    const { pokemon, toggleModal } = this.props;

    return (
      <div className="pokemon-list" align="center">
        {pokemon.map(p => (
          <PokemonListItem
            key={p.id}
            pokemonItem={p}
            toggleModal={toggleModal}
          />
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
