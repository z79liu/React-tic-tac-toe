import React, { Component } from 'react'
import Board from './Board';

export class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      xIsNext: true,
      turnCount: 0,
      history: [
        {squares: Array(9).fill(null)}
      ]
    }
  }
  handleClick=(i)=>{
    const history = this.state.history.slice(0,this.state.turnCount+1);
    const current = history[history.length-1];
    const squares = current.squares.slice()
  }
  render() {
    const history = this.state.history
    const current = history[this.state.turnCount]
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i)=>this.handleClick(i)}
          squares={current.squares}/>
        </div>
      </div>
    )
  }
}

export default Game
