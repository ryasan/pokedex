import React, { Component } from 'react';
import './BreadCrumbs.scss';

export default class BreadCrumbs extends Component {
  render() {
    return (
      <div className="bread-crumbs">
        <button onClick={() => console.log(this.props)}>test props</button>
        bread crumbs
      </div>
    );
  }
}
