import React, { Component } from 'react';
import PokemonListItem from './PokemonListItem';

export default class PokemonList extends Component {
  render() {
    const pokemon = this.props.pokemon.map((p) => (
      <PokemonListItem key={p.number} p={p} />
    ));

    return <div>{pokemon}</div>;
  }
}
