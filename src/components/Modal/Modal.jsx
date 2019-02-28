import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Modal.scss';
import client from './../../client';
import modalHelpers from './ModalHelpers';
// components
import Loader from './../Loader/Loader';

class Modal extends Component {
  state = {
    selectedPokemon: {},
    loading: false
  };

  componentWillMount = () => {
    this.setState(
      { loading: true },
      client.getPokemonDetails(this.props.selectedPokemon, this.getDetails)
    );
  };

  getDetails = data => {
    this.setState({ selectedPokemon: data, loading: false });
  };

  render = () => {
    const { loading, selectedPokemon } = this.state;
    if (loading) {
      return (
        <div className="modal-wrapper">
          <Loader />;
        </div>
      );
    }

    const sprites = modalHelpers.filterSprites(
      selectedPokemon.sprites,
      selectedPokemon.name
    );

    return (
      <Fragment>
        <div className="backdrop" onClick={this.props.onModalToggle} />
        <div className="modal-wrapper">
          <div className="pokemon-details">
            <div className="content col-1">
              <div className="title">
                <h2>
                  #{selectedPokemon.id} {selectedPokemon.name}
                </h2>
              </div>
              <div className="image-grid">
                <img
                  className="main-image"
                  src={selectedPokemon.imageUrl}
                  alt={`img-${selectedPokemon.name}`}
                />
                {sprites}
              </div>
            </div>
            <div className="content col-2">
              <div className="meta">
                <ul>
                  <li>
                    types:{' '}
                    {selectedPokemon.types
                      .map(type => type.toLowerCase())
                      .join(', ')}
                  </li>
                  <li>
                    height: {modalHelpers.roundNumber(selectedPokemon.height)} m
                  </li>
                  <li>
                    weight: {modalHelpers.roundNumber(selectedPokemon.weight)}{' '}
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
