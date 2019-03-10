import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Icon from './../Icons';
import modalHelpers from './ModalHelpers';
import { actionCreators } from './../../redux/actions';
import { roundNumber } from './../../utils';
import './Modal.scss';

class Modal extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  render = () => {
    if (this.state.loading) {
      return (
        <div className="modal-wrapper">
          <Icon name="loader" fill="#f00" width="120px" className="loader" />
        </div>
      );
    }

    const { selectedPokemon } = this.props;

    const sprites = modalHelpers.filterSprites(
      selectedPokemon.sprites,
      selectedPokemon.name
    );

    return (
      <Fragment>
        <div className="backdrop" onClick={this.props.toggleModal} />
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
                  <li>height: {roundNumber(selectedPokemon.height)} m</li>
                  <li>weight: {roundNumber(selectedPokemon.weight)} kg</li>
                </ul>
              </div>
            </div>
          </div>
          <button>close</button>
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
