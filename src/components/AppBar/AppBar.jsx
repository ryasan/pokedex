import React from 'react';
import './AppBar.scss';

import { GITHUB_REPO_URL } from './../../constants';
import Icon from './../../icons';

const AppBar = () => {
  return (
    <div className="app-bar">
      <Icon name="pokeball" width="50px" className="pokeball-icon" />
      <div className="title">
        <h2>
          Poke<em>Dex</em>
        </h2>
      </div>
      <Icon
        name="github"
        width="50px"
        className="gh-icon"
        fill="#fff"
        onClick={() => window.open(GITHUB_REPO_URL, '_blank')}
      />
    </div>
  );
};

export default AppBar;
