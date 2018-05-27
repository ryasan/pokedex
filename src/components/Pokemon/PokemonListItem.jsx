import React, { Component } from 'react';
import './Pokemon.scss';

export default class PokemonListItem extends Component {
  render() {
    const { p } = this.props;
    const category = p.types[0].toLowerCase();

    return (
      <a className="card">
        <div className="inner">
          {p.name}
          <img src={p.imageUrl} alt={`img-${p.name}`} />
        </div>
      </a>
    );
  }
}
