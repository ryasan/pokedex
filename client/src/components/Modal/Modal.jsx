import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { filterShinySprites } from './ModalHelpers';
import { actionCreators } from './../../redux/actions';
import { roundNumber } from './../../utils';
import './Modal.scss';

class Modal extends Component {
  state = {
    loading: true
  };

  renderSprites = (sprites, name) => {
    return Object.values(sprites)
      .filter(filterShinySprites)
      .map((sprite, i) => (
        <img
          className={`sprite sprite-${i + 1}`}
          key={i}
          src={sprite}
          alt={`${name}-${i + 1}`}
        />
      ));
  };

  render = () => {
    const { selectedPokemon } = this.props;
    const sprites = this.renderSprites(
      selectedPokemon.sprites,
      selectedPokemon.name
    );

    return (
      <Fragment>
        <div className="backdrop" onClick={this.props.toggleModal} />
        <div className="modal-wrapper">
          <h2 className="top">
            #{selectedPokemon.id} {selectedPokemon.name}
          </h2>
          <div className="middle-left">
            <div className="image-grid">
              <img
                className="main-image"
                src={selectedPokemon.imageUrl}
                alt={`img-${selectedPokemon.name}`}
              />
              {sprites}
            </div>
          </div>
          <ul className="middle-right">
            <li>
              types:{' '}
              {selectedPokemon.types.map(type => type.toLowerCase()).join(', ')}
            </li>
            <li>height: {roundNumber(selectedPokemon.height)} m</li>
            <li>weight: {roundNumber(selectedPokemon.weight)} kg</li>
          </ul>
          <div className="bottom">
            <button onClick={this.props.toggleModal}>close</button>
          </div>
        </div>
      </Fragment>
    );
  };
}

Modal.propTypes = {
  selectedPokemon: PropTypes.object,
  toggleModal: PropTypes.func
};

export default connect(
  state => state.pokemon,
  dispatch => ({
    toggleModal: bindActionCreators(actionCreators.toggleModal, dispatch)
  })
)(Modal);
