import React, { Component } from 'react';
import './Pokemon.scss';

export default class PokemonListItem extends Component {
  render() {
    const { p } = this.props;
    const category = p.types[0].toLowerCase();

    return (
      <div className={`card ${category}`}>
        <div>{p.name}</div>
        <img src={p.imageUrl} alt={`img-${p.name}`} />
      </div>
    );
  }
}
