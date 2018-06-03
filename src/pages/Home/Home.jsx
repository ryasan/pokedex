import React, { Component, Fragment } from 'react';
import CategoryList from './../../components/Category/CategoryList';
import MainContent from './../../components/MainContent/MainContent';

export default class HomePage extends Component {
  render() {
    const {
      pageCount,
      onPageClick,
      onFilterClick,
      history,
      location
    } = this.props;

    return (
      <Fragment>
        <CategoryList onFilterClick={onFilterClick} />
        <MainContent
          pageCount={pageCount}
          onPageClick={onPageClick}
          history={history}
          location={location}
        />
      </Fragment>
    );
  }
}
