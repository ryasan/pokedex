import React, { Component, Fragment } from 'react';
import PokemonListItem from './PokemonListItem';
import { connect } from 'react-redux';

class PokemonList extends Component {
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

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapStateToProps, null)(PokemonList);
