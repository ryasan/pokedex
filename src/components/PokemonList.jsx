import React, { Component } from 'react';
import PokemonListItem from './PokemonListItem';

export default class PokemonList extends Component {
  render() {
    const pokemon = this.props.pokemon.map(p => (
      <PokemonListItem key={p.id} p={p} />
    ));

    return (
      <div className="container" align="center">
        {pokemon}
      </div>
    );
  }
}