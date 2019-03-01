import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from './../../redux/actions';
import './Pokemon.scss';

class PokemonListItem extends Component {
  handleClick = selectedPokemon => {
    this.props.actions.selectPokemon({ selectedPokemon });
    this.props.onModalToggle();
  };

  render = () => {
    const { pokemonItem } = this.props;

    return (
      <a className="card" onClick={() => this.handleClick(pokemonItem.name)}>
        {pokemonItem.name}
        <img src={pokemonItem.imageUrl} alt={`img-${pokemonItem.name}`} />
      </a>
    );
  };
}

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(PokemonListItem);
