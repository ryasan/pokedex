import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from './../../actions';
import './Pokemon.scss';

class PokemonListItem extends Component {
  handleClick = selectedPokemon => {
    this.props.actions.selectPokemon({ selectedPokemon });
    this.props.onModalToggle();
  };

<<<<<<< HEAD
  render = () => {
    const { pokemonItem } = this.props;
=======
  render() {
    const { p } = this.props;
>>>>>>> 0b9be8b48ffe49a9e2eaebb952b29d61ba61f882

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
