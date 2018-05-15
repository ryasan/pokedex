import React, { Component } from 'react';
import AppBar from './components/AppBar';

export default class App extends Component {
  componentDidMount() {
    fetch('/api/pokemon', { headers: { Accept: 'application/json' } }).then(res => {
      console.log(res.json());
    });
  }

  render() {
    return (
      <div>
        <AppBar />
        <div className="main-content">Main Content</div>
      </div>
    );
  }
}
