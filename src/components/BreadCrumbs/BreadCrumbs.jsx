import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';

export default class BreadCrumbs extends Component {
  render() {
    const PATHS = this.props.location.pathname.split(/\b/);
    const paths = PATHS.map((path, i, arr) => {
      if (i === 0) {
        const HOME = <li key={i}><Link className="link" to="/">home</Link></li>
        const home = <li key={i}><Link className="link" to="/">home </Link><b>></b></li>
        return arr.length === 1 ? HOME : home;
      }
      return <li to={`/${path}`} key={i}><a>{path}</a></li>;
    });

    return <ul className="bread-crumbs">{paths}</ul>;
  }
}

