import React, { Component } from 'react';
import POKE_ICON from './../../images/pokeball.svg';
import GH_ICON from './../../images/github.svg';
import './AppBar.scss';

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="poke-icon">
        <img src={POKE_ICON} alt="poke" />
      </div>
      <div className="title">
        <h2>
          Poke<em>Dex</em>
        </h2>
      </div>
      <a href="https://github.com/ryasan86/pokedex">
        <img src={GH_ICON} alt="github" className="gh-icon" />
      </a>
    </div>
  );
};

export default AppBar;
