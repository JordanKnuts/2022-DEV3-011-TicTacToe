import React, { Component } from "react";
import GameBoard from "./GameBoard";

export default class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      xTurn: true,
      currentSquares: Array(9).fill(null),
    };
  }
  getWinner(squares) {
    console.log("squares", squares);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  handleClick(i) {
    const squares = this.state.currentSquares;
    const winner = this.getWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xTurn ? "X" : "O";
    this.setState({
      currentSquares: squares,
      xTurn: !this.state.xTurn,
      step: this.state.step + 1,
    });
  }

  render() {
    const winner = this.getWinner(this.state.currentSquares);

    return (
      <div className="game">
        <div className="game-board">
          {(winner ||
            this.state.step === this.state.currentSquares.length) && (
              <button
                onClick={() => {
                  this.setState({
                    step: 0,
                    xTurn: true,
                    currentSquares: Array(9).fill(null),
                  });
                }}
              >
                {"Start game"}
              </button>
            )}
          {winner && <div>{"The winner is " + winner}</div>}
          <GameBoard
            onClick={(i) => this.handleClick(i)}
            squares={this.state.currentSquares}
          />
        </div>
      </div>
    );
  }
}
