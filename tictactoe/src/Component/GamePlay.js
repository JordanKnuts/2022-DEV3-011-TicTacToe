import React, { Component } from "react";
import GameBoard from "./GameBoard";

export default class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        step: 0,
        xTurn: true,
        currentSquares:Array(9).fill(null) ,
    };
  }

  handleClick(i) {
    const squares =  this.state.currentSquares;
    squares[i] = this.state.xTurn ? "X" : "O";
    this.setState({
      currentSquares: squares,
      xTurn: !this.state.xTurn,
      step: this.state.step+1,
    });
  }

  render() {


    return (
      <div className="game">
        <div className="game-board">
          <GameBoard
            onClick={(i) => this.handleClick(i)}
            squares={this.state.currentSquares}
          />
        </div>
      </div>
    );
  }
}

