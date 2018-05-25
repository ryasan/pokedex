import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storePokemon } from './store';
import { client } from './client';

import AppBar from './components/AppBar';
import PokemonList from './components/PokemonList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      offset: 0
    };
  }

  componentDidMount() {
    this.loadPokemonFromServer();
  }

  loadPokemonFromServer() {
    const outgoing = {
      limit: this.props.perPage,
      offset: this.state.offset
    };

    client.getPokemon(data => {
      this.setState({
        pokemon: data.pokemon,
        pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
      });
      this.props.storePokemon(data);
    }, outgoing);
  }

  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.props.perPage);
    this.setState({ offset: offset }, () => this.loadPokemonFromServer());
  }

  render() {
    return (
      <Fragment>
        <AppBar />
        <div className='main-content'>
          <PokemonList pokemon={this.state.pokemon} />
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel={<a href=''>...</a>}
            breakClassName='break-me'
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={data => this.handlePageClick(data)}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </div>
      </Fragment>
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
