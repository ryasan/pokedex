import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';

export default class BreadCrumbs extends Component {
  componentDidMount() {
    // console.log(this.props.location.pathname);
  }

  render() {
    const PATHS = this.props.location.pathname.replace(/\//, '').split('/');
    let link = '';
    const paths = PATHS.map((path, i, arr) => {
      if (arr.length === 1) {
       return <span to="/" key={i}>HOME</span>;
      } else if (i === arr.length - 1) {
        return <span to="/" key={i}>{path.toUpperCase()}</span>;
      }
      return <Link to={`/${link}`} key={i}>{path} / </Link>;
    });

    return <div className="bread-crumbs">{paths}</div>;
  }
}
