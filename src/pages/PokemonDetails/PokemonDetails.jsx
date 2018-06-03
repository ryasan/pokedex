import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonDetails.scss';
import { client } from './../../client';

class PokemonDetailsPage extends Component {
  render() {
    const { selectedPokemon } = this.props;
    // const sprites
    return (
      <div className="pokemon-details">
        <h2>#{selectedPokemon.id} {selectedPokemon.name}</h2>
        <img src={selectedPokemon.imageUrl} alt={`img-${selectedPokemon.name}`} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPokemon: state.selectedPokemon
  };
};

export default connect(mapStateToProps, null)(PokemonDetailsPage);
