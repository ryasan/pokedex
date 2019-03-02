import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from './../../redux/actions';
import './Pokemon.scss';

class PokemonListItem extends Component {
  handleClick = selectedPokemon => {
    const { selectPokemon, toggleModal } = this.props.actions;
    selectPokemon({ selectedPokemon });
    toggleModal();
  };

  render = () => {
    const { pokemonItem } = this.props;

    return (
      <div className="card" onClick={() => this.handleClick(pokemonItem.name)}>
        {pokemonItem.name}
        <img src={pokemonItem.imageUrl} alt={`img-${pokemonItem.name}`} />
      </div>
    );
  };
}

export default connect(
  null,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(PokemonListItem);
