import React, { Component } from 'react';
import './Pokemon.scss';

export default class PokemonListItem extends Component {
  handleClick(p) {
    this.props.history.push({
      pathname: `/details/${p.name}`,
      p: p
    })
  }

  render() {
    const { p, history, location } = this.props;
    const category = p.types[0].toLowerCase();

    return (
      <a className="card" onClick={this.handleClick.bind(this, p)}>
        <div className="inner">
          {p.name}
          <img src={p.imageUrl} alt={`img-${p.name}`} />
        </div>
      </a>
    );
  }
}
