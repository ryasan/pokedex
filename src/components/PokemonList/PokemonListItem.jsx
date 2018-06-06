import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storePokemonName } from './../../store/actions';
import './Pokemon.scss';

class PokemonListItem extends Component {
  handleClick(p) {
    this.props.storePokemonName(p.name);
    this.props.onModalToggle();
  }

  render() {
    const { p } = this.props;
    const category = p.types[0].toLowerCase();

    return (
      <Fragment>
        <a className="card" onClick={this.handleClick.bind(this, p)}>
          {p.name}
          <img src={p.imageUrl} alt={`img-${p.name}`} />
        </a>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storePokemonName }, dispatch);
};

export default connect(null, mapDispatchToProps)(PokemonListItem);
