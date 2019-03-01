import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Modal.scss';
import client from './../../client';
import modalHelpers from './ModalHelpers';
// components
import Loader from './../Loader/Loader';

class Modal extends Component {
  state = {
    pokemonDetails: {},
    loading: false
  };

  componentWillMount = () => {
    this.setState(
      { loading: true },
      client.fetchPokemonDetails(this.props.selectedPokemon, this.getDetails)
    );
  };

  getDetails = data => {
    this.setState({ pokemonDetails: data, loading: false });
  };

  render = () => {
    const { loading, pokemonDetails } = this.state;
    if (loading) {
      return (
        <div className="modal-wrapper">
          <Loader />;
        </div>
      );
    }

    const sprites = modalHelpers.filterSprites(
      pokemonDetails.sprites,
      pokemonDetails.name
    );

    return (
      <Fragment>
        <div className="backdrop" onClick={this.props.onModalToggle} />
        <div className="modal-wrapper">
          <div className="pokemon-details">
            <div className="content col-1">
              <div className="title">
                <h2>
                  #{pokemonDetails.id} {pokemonDetails.name}
                </h2>
              </div>
              <div className="image-grid">
                <img
                  className="main-image"
                  src={pokemonDetails.imageUrl}
                  alt={`img-${pokemonDetails.name}`}
                />
                {sprites}
              </div>
            </div>
            <div className="content col-2">
              <div className="meta">
                <ul>
                  <li>
                    types:{' '}
                    {pokemonDetails.types
                      .map(type => type.toLowerCase())
                      .join(', ')}
                  </li>
                  <li>
                    height: {modalHelpers.roundNumber(pokemonDetails.height)} m
                  </li>
                  <li>
                    weight: {modalHelpers.roundNumber(pokemonDetails.weight)}{' '}
                    kg
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default connect(
  state => state.pokemon,
  null
)(Modal);
