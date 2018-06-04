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
      client.getPokemonDetails(this.props.pokemonName, this.getDetails.bind(this))
    );
  }

  getDetails(data) {
    this.setState({ selectedPokemon: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    const { selectedPokemon } = this.state;
    const sprites = Object.values(selectedPokemon.sprites)
      .filter(Boolean)
      .map((sprite, i) => (
        <img key={i} src={sprite} alt={`${selectedPokemon.name}-${i}`} />
      ));

    return (
      <div className="pokemon-details">
        <div>
          <h2>
            #{selectedPokemon.id} {selectedPokemon.name}
          </h2>
        </div>
        <div className="image-grid">
          <img
            src={selectedPokemon.imageUrl}
            alt={`img-${selectedPokemon.name}`}
          />
          {sprites}
        </div>
        <div>
          <ul>
            <li>
              types:&nbsp;{selectedPokemon.types.map(type => type.toLowerCase()).join(', ')}
            </li>
            <li>height: {roundNumber(selectedPokemon.height)} m</li>
            <li>weight: {roundNumber(selectedPokemon.weight)} kg</li>
          </ul>
        </div>
      </div>
    );
  }
}

const roundNumber = num => {
  return num * 100 / 1000;
};

const mapStateToProps = state => {
  return {
    pokemonName: state.pokemonName
  };
};

export default connect(mapStateToProps, null)(PokemonDetailsPage);
