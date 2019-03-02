import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from './../Icons';
import { Input } from './../common';
import { GITHUB_REPO_URL } from './../../constants';
import { actionCreators } from './../../redux/actions';
import './AppBar.scss';

const AppBar = props => {
  const handleChange = async e => {
    const { searchTerm, setOffset } = props.actions;
    setOffset({ idx: 0 });
    await searchTerm({ term: e.target.value });
    props.fetchPokemon();
  };

  return (
    <div className="app-bar">
      <Icon name="pokeball" width="50px" className="pokeball-icon" />
      <Input
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        debounceTimeout={300}
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
};

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(AppBar);
