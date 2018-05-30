import React, { Component, Fragment } from 'react';
import PokemonListItem from './PokemonListItem';

export default class PokemonList extends Component {
  render() {
    const { pokemon, history, location } = this.props;
    const collection = pokemon.map(p => (
      <PokemonListItem key={p.id} p={p} history={history} location={location} />
    ));

    return (
      <div className="pokemon-list" align="center">
        {collection}
      </div>
    );
  }
}
