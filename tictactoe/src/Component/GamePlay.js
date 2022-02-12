import React, { Component } from "react";
import GameBoard from "./GameBoard";

export default class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  handleClick(i) {
    console.log('i', i)
  }

  render() {


    return (
      <div className="game">
        <div className="game-board">
          <GameBoard
            onClick={(i) => this.handleClick(i)}
            squares={Array(9).fill(null)}
          />
        </div>
      </div>
    );
  }
}

