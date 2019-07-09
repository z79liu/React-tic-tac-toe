import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    const style = {
      textAlign: "center"
    }
    return (
      <div className="App">
        <h1 style={style}>Zeyu's React Tic-Tac-Toe</h1>
        <Game/>
      </div>
    );
  }
}

export default App;
