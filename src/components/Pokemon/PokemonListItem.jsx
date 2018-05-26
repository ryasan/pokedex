import React, { Component } from 'react';
import './Pokemon.scss';

export default class PokemonListItem extends Component {
  render() {
    const { p } = this.props;
    const categoryList = p.types.join(' ').toLowerCase();
    return (
      <div className={`card ${categoryList}`} onClick={(e) => console.log(e.className)}>
        <div>{p.name}</div>
        <img src={p.imageUrl} alt={`img-${p.name}`} />
      </div>
    );
  }
}
