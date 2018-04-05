import React, { Component } from 'react';
import './Board.css';
import Cell from '../../components/Cell/Cell';
import { GameBoard } from './GameBoard';

let puzzleArr = [];
export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      on: false
    };
  }

  startGame = () => {
    this.setState({
      on: true
    });
  };

  //When page loads, use the static puzzle in App Component to create the board
  componentDidMount() {
    for (let i = 0; i < this.props.puzzle.length; i++) {
      let row = this.props.puzzle[i];
      for (let j = 0; j < row.length; j++) {
        let cell = { id: [i] + [j], value: row[j] };
        puzzleArr.push(cell);
        if (puzzleArr.length === 81) {
          return puzzleArr;
        }
      }
    }
  }

  render() {
    return (
      <div className="Board-Container">
        <div className="Game-Board">
          {this.state.on
            ? puzzleArr.map(cell => {
                return <Cell key={cell.id} cell={cell} />;
              })
            : ''}
        </div>
        {!this.state.on ? (
          <button onClick={this.startGame}> Start </button>
        ) : (
          ''
        )}
        <button onClick={GameBoard.checkBoard}> Check Puzzle </button>
      </div>
    );
  }
}
