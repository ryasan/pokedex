import React, { Component } from 'react';
import AppBar from './components/AppBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div className="main-content">Main Content</div>
      </div>
    );
  }
}
