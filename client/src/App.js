import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (logMessage) => {
    console.log(logMessage);
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/ping`, {
                    // params :{
                    //     dataType: 'json'
                    // }
                })
                    .then(function (response) {
                        console.log('SUCCESS', response)
                    })
                    .catch(function (error) {
                        console.log('ERROR', error)
                    });
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
