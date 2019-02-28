import React, { Component } from 'react';
import './AppBar.scss';

import { Input } from './../common';
import Icon from './../../icons';
import { GITHUB_REPO_URL } from './../../constants';

class AppBar extends Component {
  handleChange = e => {};

  render = () => (
    <div className="app-bar">
      <Icon name="pokeball" width="50px" className="pokeball-icon" />
      <Input
        type="search"
        placeholder="Search..."
        onChange={this.handleChange}
      />
      <Icon
        name="github"
        width="50px"
        className="gh-icon"
        fill="#fff"
        onClick={() => window.open(GITHUB_REPO_URL, '_blank')}
      />
    </div>
  );
}

export default AppBar;
