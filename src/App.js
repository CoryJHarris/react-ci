import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Continuous Integration using circleCI
          </p>
          <a
            className="App-link"
            href="https://github.com/CoryJHarris/react-ci"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to repo
          </a>
        </header>
      </div>
    );
  }
}

export default App;
