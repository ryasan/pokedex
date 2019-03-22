import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from './../Icons';
import { Input } from './../common';
import { GITHUB_REPO_URL } from './../../constants';
import { actionCreators } from './../../redux/actions';
import './AppBar.scss';

const AppBar = props => {
  const handleChange = debounce(async e => {
    const { searchTerm, setOffset } = props.actions;
    setOffset({ idx: 0 });
    await searchTerm({ term: e.target.value });
    props.fetchPokemon();
  }, 350);

  return (
    <div className="app-bar">
      <Icon name="pokeball" width="50px" className="pokeball-icon" />
      <Input
        type="search"
        placeholder="Search..."
        onChange={e => {
          e.persist();
          handleChange(e);
        }}
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

AppBar.propTypes = {
  actions: PropTypes.object.isRequired,
  fetchPokemon: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      searchTerm: actionCreators.searchTerm,
      setOffset: actionCreators.setOffset
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(AppBar);
