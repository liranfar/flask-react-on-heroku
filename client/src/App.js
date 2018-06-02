import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import handleClick from './utils/restClient';

class App extends Component {
  constructor(){
    super();

    this.state = {};
    this.handleClick = handleClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() =>
            this.handleClick('Hello World!')
          }
        >
        Click Me !
        </button>
      </div>
    );
  }
}

export default App;
