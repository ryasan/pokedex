import React, { Component } from 'react';

export default class PokemonListItem extends Component {
  render() {
    const { p } = this.props;
    return (
      <div className="card">
        <div>{p.name}</div>
        <img src={p.imageUrl} alt={`img-${p.name}`} />
      </div>
    );
  }
}
