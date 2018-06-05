import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './PokemonDetails.scss';
import { client } from './../../client';
import Loader from './../../components/Loader/Loader';

class PokemonDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPokemon: {},
      loading: false
    };
  }

  componentWillMount() {
    this.setState(
      { loading: true },
      client.getPokemonDetails(
        this.props.pokemonName,
        this.getDetails.bind(this)
      )
    );
  }

  getDetails(data) {
    this.setState({ selectedPokemon: data, loading: false });
  }

  render() {
    const { loading, selectedPokemon } = this.state;
    if (loading) {
      return (
        <div className="details-wrapper">
          <Loader />;
        </div>
      );
    }

    const sprites = Object.values(selectedPokemon.sprites)
      .filter(filter)
      .map((sprite, i) => (
        <img
          className={`sprite sprite-${i + 1}`}
          key={i}
          src={sprite}
          alt={`${selectedPokemon.name}-${i + 1}`}
        />
      ));

    return (
      <div className="details-wrapper">
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
                  types:&nbsp;{selectedPokemon.types
                    .map(type => type.toLowerCase())
                    .join(', ')}
                </li>
                <li>height: {roundNumber(selectedPokemon.height)} m</li>
                <li>weight: {roundNumber(selectedPokemon.weight)} kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const filter = url => {
  let regex = /\/shiny\//;
  return url && !regex.test(url);
};

const roundNumber = num => {
  return (num * 100) / 1000;
};

const mapStateToProps = state => {
  return {
    pokemonName: state.pokemonName
  };
};

export default connect(
  mapStateToProps,
  null
)(PokemonDetailsPage);
