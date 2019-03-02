import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from './../Icons';
import { Input } from './../common';
import { GITHUB_REPO_URL } from './../../constants';
import { actionCreators } from './../../redux/actions';
import './AppBar.scss';

class AppBar extends Component {
  handleChange = async e => {
    await this.props.actions.searchTerm({ term: e.target.value });
    this.props.fetchPokemon();
  };

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

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(AppBar);
