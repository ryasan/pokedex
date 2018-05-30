import React, { Component } from 'react';

export default class PokemonDetailsPage extends Component {
  render() {
    const { p } = this.props.location;

    return (
      <div>
        <h2>{p.name}</h2>
        <img src={p.imageUrl} alt={`img-${p.name}`} />
      </div>
    );
  }
}
