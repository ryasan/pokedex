import React, { Component } from 'react';

export default class PokemonListItem extends Component {
  render() {
    const { p } = this.props;
    return <div>{p.name}</div>;
  }
}
