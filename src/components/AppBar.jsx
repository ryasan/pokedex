import React, { Component } from 'react';
import brand from './../images/pokeball.svg';

export default class AppBar extends Component {
  render() {
    return (
      <div className="app-bar">
        <div className="nav-item">
          <img src={brand} alt="poke" />
        </div>
        <div className="nav-item title">
          <h2>
            Poke<em>Dex</em>
          </h2>
        </div>
      </div>
    );
  }
}
