import React from 'react';
import './AppBar.scss';

import { Input } from './../common';
import Icon from './../../icons';
import { GITHUB_REPO_URL } from './../../constants';

const AppBar = () => {
  return (
    <div className="app-bar">
      <Icon name="pokeball" width="50px" className="pokeball-icon" />
      <Input type="search" placeholder="Search..."/>
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
