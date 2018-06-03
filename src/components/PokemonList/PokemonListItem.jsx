import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeSelectedPokemon } from './../../store/actions';
import './Pokemon.scss';
import { client } from './../../client';

class PokemonListItem extends Component {
  handleClick(p) {
    client.getOnePokemon(this.getOnePokemon.bind(this), { title: p.name });
    this.props.history.push({
      pathname: `/details/${p.name.toLowerCase()}`,
    });
  }

  getOnePokemon(data) {
    this.props.storeSelectedPokemon(data);
  }

  render() {
    const { p, history, location } = this.props;
    const category = p.types[0].toLowerCase();

    return (
      <a className="card" onClick={this.handleClick.bind(this, p)}>
        <div className="inner">
          {p.name}
          <img src={p.imageUrl} alt={`img-${p.name}`} />
        </div>
      </a>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPokemon: state.selectedPokemon
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storeSelectedPokemon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
