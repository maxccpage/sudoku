import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import { NewGame } from './NewGame';

export default class App extends Component {
  render() {
    //Using a static puzzle
    const puzzle = [
      ['', 2, '', '', 5, '', '', 4, ''],
      [1, '', '', 7, '', '', 8, '', 9],
      ['', 4, '', 6, '', '', 5, '', 8],
      [4, 5, '', '', 9, '', '', '', ''],
      ['', '', '', '', '', 3, '', 6, ''],
      ['', 8, '', 2, '', '', '', '', ''],
      ['', 1, '', '', '', 6, '', 7, ''],
      ['', '', 5, '', '', 9, '', '', 1],
      [2, '', '', 7, '', '', '', '', '']
    ];
    return (
      <div className="App-Container">
        <Board puzzle={puzzle} />
        <button onClick={NewGame.resetPuzzle}> Reset Game </button>
      </div>
    );
  }
}
