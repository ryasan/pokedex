import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storePokemon } from './store';
import { client } from './client';

import AppBar from './components/AppBar';
import PokemonList from './components/PokemonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    client.getPokemon(data => {
      this.setState({
        pokemon: data
      });
      this.props.storePokemon(data);
    });
  }

  render() {
    return (
      <div>
        <AppBar />
        <div className="main-content">
          <PokemonList pokemon={this.state.pokemon} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storePokemon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
