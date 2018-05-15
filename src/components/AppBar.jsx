import React, { Component } from 'react';
import brand from './../images/pokeball.svg';

export default class AppBar extends Component {
  render() {
    return (
      <div className="app-bar">
        <li className="nav-item">
          <img src={brand} className="brand" alt="poke" />
        </li>
        <li className="nav-item title">
          <h2>
            Poke<em>Dex</em>
          </h2>
        </li>
      </div>
    );
  }
}
